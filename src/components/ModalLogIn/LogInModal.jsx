import {
  Backdrop,
  Btn,
  Cross,
  Error,
  Eye,
  Input,
  ModalWindow,
  Text,
  Tittle,
  WrapperEye,
} from './LogInModal.styled';
import icons from '../../common/sprite.svg';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  email: '',
  password: '',
};

export const LogInModal = ({ onClose }) => {
  const [error, setError] = useState('');

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const email = values.email;
      const password = values.password;

      await signInWithEmailAndPassword(auth, email, password);

      setError('');
      onClose();
      resetForm();
    } catch (error) {
      setError("SORRY, THIS ACCOUNT DOESN'T EXIST");
    }
  };

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  return (
    <Backdrop onClick={onClose}>
      <ModalWindow onClick={e => e.stopPropagation()}>
        <Tittle>Log In</Tittle>
        <Text>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input type="text" placeholder="Email" name="email" />
            <Error name="email" component="div" />
            <WrapperEye>
              <Input type="password" placeholder="Password" name="password" />
              <Eye>
                <svg width={16} height={16}>
                  <use href={`${icons}#eye-blocked`} />
                </svg>
              </Eye>
            </WrapperEye>
            <Error name="password" component="div" />
            <Btn type="submit">Log In</Btn>
          </Form>
        </Formik>
        <Cross onClick={onClose}>
          <svg width={16} height={16}>
            <use href={`${icons}#cross`} />
          </svg>
        </Cross>
        {error ? (
          <p style={{ color: 'red', margin: '20px 60px' }}>{error}</p>
        ) : (
          ''
        )}
      </ModalWindow>
    </Backdrop>
  );
};
