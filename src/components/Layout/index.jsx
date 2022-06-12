import classes from './index.module.scss';

const Layout = ({ children, className }) => {
  return <div className={`${classes.layout} ${className}`}>{children}</div>;
};

export default Layout;
