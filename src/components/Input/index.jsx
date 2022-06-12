import { getId } from '../../helper';
import styles from './index.module.scss';

const Input = ({
  label,
  type = 'text',
  value,
  error,
  errMsg = 'Please enter a valid value',
  onChange,
  onBlur,
}) => {
  const classes = `${styles[`form-control`]} ${error ? styles.invalid : ''}`;

  const labelId = getId();
  return (
    <div className={classes}>
      <label htmlFor={labelId} className={styles['form-control__label']}>
        {label}
      </label>
      <input
        id={labelId}
        className={styles['form-control__input']}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && (
        <p className={styles['error-text']}>
          <span class="material-icons">error_outline</span>
          {errMsg}
        </p>
      )}
    </div>
  );
};

export default Input;
