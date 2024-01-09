import classNames from 'classnames';
import React, {
  FocusEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Input, InputProps, Tag } from '../index';
import { settings } from '../_utils/global';
import './style/index.less';

const tagInputClsName = `${settings.prefix}-tagInput`;

export interface TagInputProps extends Omit<InputProps, 'onChange'> {
  /**
   * 当前标签列表，配合onChange实现受控模式
   */
  value?: string[];
  /**
   * 默认标签列表
   */
  defaultValue?: string[];
  /**
   * 标签变化时的回调
   */
  onChange?: (value: string[]) => void;
  /**
   * 输入框变化时的回调
   */
  onTextChange?: FormEventHandler<HTMLInputElement>;
  /**
   * 是否在标签上显示关闭按钮，默认显示
   */
  closable?: boolean;
  /**
   * 失焦时添加标签
   */
  addOnBlur?: boolean;
  /**
   * 允许重复添加标签
   */
  allowDuplicates?: boolean;
  /**
   * 最多可输入的标签数量
   */
  max?: number;
  /**
   * 自定义标签渲染
   */
  renderTagItem?: (item: string, index: number, onClose: () => void) => void;
  /**
   * 关闭标签时的回调
   */
  onClose?: (item: string, index: number) => void;
}

export function TagInput(props: TagInputProps) {
  const {
    value,
    defaultValue,
    closable = true,
    addOnBlur,
    allowDuplicates = true,
    max,
    renderTagItem,
    onChange,
    onTextChange,
    onBlur,
    onKeyDown,
    className: customClassName,
    onClose,
    ...rest
  } = props;
  const isControlled = 'value' in props;
  const [tags, setTags] = useState(value || defaultValue || []);
  const [textValue, setTextValue] = useState('');

  useEffect(() => {
    if (isControlled && value) {
      setTags(value);
    }
  }, [value, isControlled]);

  const onCloseItem = useCallback(
    (index: number) => {
      if (onClose) {
        onClose(tags[index], index);
      }
      const newTags = tags.filter((item, i) => i !== index);
      onChange?.(newTags);
      if (isControlled) {
        return;
      }
      setTags(newTags);
    },
    [tags, isControlled],
  );

  const prefix = useMemo(() => {
    if (tags.length) {
      return (
        <>
          {tags.map((item, index) => {
            if (renderTagItem) {
              return renderTagItem(item, index, () => onCloseItem(index));
            }
            return (
              <Tag
                key={item}
                closable={closable}
                onClose={(e) => {
                  if (onClose) {
                    onClose(tags[index], index);
                    if (e.defaultPrevented) return;
                  }
                  if (isControlled) e.preventDefault();
                  onCloseItem(index);
                }}
              >
                {item}
              </Tag>
            );
          })}
        </>
      );
    }
    return null;
  }, [tags, renderTagItem, isControlled, closable, onCloseItem]);

  const addNewItemHandler = useCallback(
    (val: string) => {
      const value = val.trim();
      if (!value) {
        setTextValue('');
        return;
      }
      if (typeof max === 'number' && max > 0 && tags.length + 1 > max) {
        return;
      }

      setTextValue('');
      if (allowDuplicates || (!allowDuplicates && !tags.includes(value))) {
        const newTags = [...tags, value];
        if (onChange) {
          onChange(newTags);
        }
        if (isControlled) {
          return;
        }
        setTags(newTags);
      }
    },
    [tags, max, allowDuplicates, isControlled],
  );

  const onBlurHandler = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      if (onBlur) {
        onBlur(e);
      }
      if (e.defaultPrevented) {
        return;
      }
      if (addOnBlur) {
        addNewItemHandler(e.target.value);
      }
    },
    [onBlur],
  );

  const onKeyDownHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (onKeyDown) {
        onKeyDown(e);
      }
      if (e.defaultPrevented) {
        return;
      }
      if (e.key === 'Enter') {
        addNewItemHandler(textValue);
      } else if (e.key === 'Backspace' && !textValue) {
        if (tags.length) {
          onCloseItem(tags.length - 1);
        }
      }
    },
    [onKeyDown, textValue, tags],
  );

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onTextChange) {
        onTextChange(e);
      }
      setTextValue(e.target.value);
    },
    [onTextChange],
  );
  return (
    <Input
      prefix={prefix}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      onKeyDown={onKeyDownHandler}
      value={textValue}
      prefixComponent={React.Fragment}
      className={classNames(tagInputClsName, customClassName)}
      {...rest}
    />
  );
}
