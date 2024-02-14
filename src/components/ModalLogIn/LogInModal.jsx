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
import { useEffect } from 'react';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  email: '',
  password: '',
};

export const LogInModal = ({ onClose }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
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
      </ModalWindow>
    </Backdrop>
  );
};
