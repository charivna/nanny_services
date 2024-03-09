import icons from '../../common/sprite.svg';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

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
} from './RegisterModal.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterModal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const email = values.email;
      const password = values.password;

      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, { displayName: values.name });

      resetForm();
      onClose();
    } catch (error) {}
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyPress = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  return (
    <Backdrop onClick={onClose}>
      <ModalWindow onClick={e => e.stopPropagation()}>
        <Tittle>Registration</Tittle>
        <Text>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input type="text" placeholder="Name" name="name" />
            <Error name="name" component="div" />
            <Input type="text" placeholder="Email" name="email" />
            <Error name="email" component="div" />
            <WrapperEye>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                name="password"
              />
              {showPassword ? (
                <Eye type="button" onClick={togglePasswordVisibility}>
                  <svg width={16} height={16}>
                    <use href={`${icons}#eye`} />
                  </svg>
                </Eye>
              ) : (
                <Eye type="button" onClick={togglePasswordVisibility}>
                  <svg width={16} height={16}>
                    <use href={`${icons}#eye-blocked`} />
                  </svg>
                </Eye>
              )}
            </WrapperEye>
            <Error name="password" component="div" />
            <Btn type="submit">Sign Up</Btn>
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
