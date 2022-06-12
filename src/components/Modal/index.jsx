import ReactDOM from 'react-dom';
import styles from './index.module.scss';

const Overlay = ({ onClick }) => (
  <div className={styles.overlay} onClick={onClick}></div>
);

const ModalBody = ({ onClose, className, children }) => {
  return (
    <div className={`${styles.modal} ${className}`}>
      <button className={styles.modal__close} onClick={onClose}>
        <span class="material-icons">close</span>
      </button>

      <div className={styles.modal__content}>{children}</div>
    </div>
  );
};

const Modal = ({ onClose, className, children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay onClick={onClose} />,
        document.getElementById('overlay')
      )}
      {ReactDOM.createPortal(
        <ModalBody className={className} onClose={onClose}>
          {children}
        </ModalBody>,
        document.getElementById('modal')
      )}
    </>
  );
};

export default Modal;
