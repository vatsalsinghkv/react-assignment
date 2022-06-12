import { useState } from 'react';
import classes from './App.module.scss';
import Button from './components/Button';
import Footer from './components/Footer';
import Input from './components/Input';
import Layout from './components/Layout';
import Modal from './components/Modal';
import useInput from './hooks/use-input';

const App = () => {
  const [text, setText] = useState('Welcome to the assignment');

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    reset();
  };

  const { value, isValid, hasError, blurHandler, changeHandler, reset } =
    useInput(value => value.trim() !== '');

  const modalSubmitHandler = e => {
    e.preventDefault();
    blurHandler();
    if (!isValid) return;
    setText(value);
    closeModal();
  };

  return (
    <>
      <Layout className={classes.App}>
        <h1 className={classes.heading}>{text}</h1>
        <Button onClick={openModal} className={classes.btn}>
          Modal
        </Button>
        <Footer />
      </Layout>

      {showModal && (
        <Modal className={classes.modal} onClose={closeModal}>
          <h2 className={classes['modal__heading']}>Modal Form</h2>
          <form autoComplete="off" onSubmit={modalSubmitHandler}>
            <Input
              value={value}
              error={hasError}
              onBlur={blurHandler}
              onChange={changeHandler}
              errMsg="Text cannot be empty!"
              label="Text"
            />
            <Button type="submit" className={classes['modal__btn']}>
              Submit
            </Button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default App;
