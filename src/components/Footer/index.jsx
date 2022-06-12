import { memo } from 'react';
import styles from './index.module.scss';

const Footer = ({
  name = 'Vatsal Singh',
  github = 'https://github.com/vatsalsinghkv',
}) => {
  return (
    <footer className={styles.footer}>
      {'created by '}
      <a className={styles.name} href={github} target="_blank" rel="noreferrer">
        {name}
      </a>
    </footer>
  );
};

export default memo(Footer);
