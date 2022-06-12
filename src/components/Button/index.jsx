import styles from './index.module.scss';

const Button = ({ className, onClick, type, children, color }) => {
  const clickHandler = () => {
    onClick();
  };

  return (
    <button
      type={type || 'button'}
      className={`${styles.btn} ${className} ${styles.color}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
