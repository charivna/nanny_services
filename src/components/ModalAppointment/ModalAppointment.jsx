import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import icons from '../../common/sprite.svg';
import styled from 'styled-components';
import {
  AppWindow,
  Backdrop,
  BigInput,
  BtnSend,
  Cross,
  ImagePsycho,
  InfoPsycho,
  InputComment,
  InputWrapper,
  Name,
  SmallInput,
  Text,
  Tittle,
  YourPs,
} from './ModalAppointment.styled';
import { useEffect } from 'react';
import { Error } from 'components/ModalLogIn/LogInModal.styled';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  number: yup.string().required('Number is required'),
  time: yup.string().required(),
  email: yup.string().email('Invalid email').required('Email is required'),
  comment: yup.string().required('Comment is required'),
});

const initialValues = {
  name: '',
  number: '',
  time: '',
  email: '',
  comment: '',
};

const appointmentTimes = [
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
];

export const ModalAppointment = ({ person, onClose }) => {
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

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log('Form Values:', values);
      toast.success(
        `Appointment scheduled successfully with ${person.name} at ${values.time}!`
      );
      await new Promise(resolve => setTimeout(resolve, 2500));
      resetForm();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const StyledSelect = styled.select`
    box-sizing: border-box;
    border: 1px solid rgba(25, 26, 21, 0.1);
    border-radius: 12px;
    width: 232px;
    height: 52px;
    margin-bottom: 18px;
    padding: 16px 18px;

    &::placeholder {
      color: rgb(25, 26, 21);
      font-size: 16px;
    }
  `;

  return (
    <Backdrop onClick={onClose}>
      <AppWindow onClick={e => e.stopPropagation()}>
        <Tittle>Make an appointment with a psychologists</Tittle>
        <Text>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </Text>

        <InfoPsycho>
          <ImagePsycho src={person.avatar_url} alt="photo-of-psychology" />
          <div>
            <YourPs>Your psychologists</YourPs>
            <Name>{person.name}</Name>
          </div>
        </InfoPsycho>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form>
            <BigInput name="name" placeholder="Name"></BigInput>
            <Error name="name" component="div" />
            <InputWrapper>
              <SmallInput name="number" placeholder="+380"></SmallInput>
              <Error name="number" component="div" />
              <Field as={StyledSelect} name="time" placeholder="Meeting time">
                <option value="" disabled>
                  00:00
                </option>
                {appointmentTimes.map(time => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Field>
              <Error name="time" component="div" />
            </InputWrapper>
            <BigInput name="email" placeholder="Email"></BigInput>
            <Error name="email" component="div" />
            <InputComment name="comment" placeholder="Comment"></InputComment>
            <Error name="comment" component="div" />
            <BtnSend
              type="submit"
              onClick={() => {
                console.log('hello');
              }}
            >
              Send
            </BtnSend>
          </Form>
        </Formik>
        <Cross onClick={onClose}>
          <svg width={16} height={16}>
            <use href={`${icons}#cross`} />
          </svg>
        </Cross>
      </AppWindow>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Backdrop>
  );
};
