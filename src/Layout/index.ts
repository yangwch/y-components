import InternalLayout, { Content, Footer, Header } from './Layout';
import Sider from './Sider';

export type { SiderProps } from './Sider';

type InternalLayoutType = typeof InternalLayout;

type CompoundedComponent = InternalLayoutType & {
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  Sider: typeof Sider;
};

const Layout = InternalLayout as CompoundedComponent;

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = Sider;

export default Layout;
