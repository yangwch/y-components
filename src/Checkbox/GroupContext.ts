import { createContext } from 'react';

interface ContextProps {
  disabled: boolean;
  name?: string;
  value: string[];
  setChecked: (checkedValues: string[]) => void;
}

type ContextValue = ContextProps | null;

const GroupContext = createContext<ContextValue>(null);

export default GroupContext;
