import icons from '../../common/sprite.svg';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
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

export const RegisterModal = ({ onClose }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required(),
  });

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    // console.log(values);
    // setEmail(values.email);
    // setPassword(values.password);
    // setName(values.name);
    const email = values.email;
    const password = values.password;
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log(userCredential);
      })
      .catch(error => {
        console.log(error);
      });
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
