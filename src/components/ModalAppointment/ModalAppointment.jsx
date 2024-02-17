import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import {
  AppWindow,
  Backdrop,
  ImagePsycho,
  ImgWrap,
  InfoPsycho,
  Name,
  Text,
  Tittle,
  YourPs,
} from './ModalAppointment.styled';

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

export const ModalAppointment = ({ person }) => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(values);
      toast.success(
        `Appointment scheduled successfully with ${person.name} at ${values.time}!`
      );
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Backdrop>
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
            <Field name="name" placeholder="Name"></Field>
            <Field name="number" placeholder="+380"></Field>
            <Field name="time" placeholder="Meeting time"></Field>
            <Field name="email" placeholder="Email"></Field>
            <Field name="comment" placeholder="Comment"></Field>
            <button type="submit">Send</button>
          </Form>
        </Formik>
      </AppWindow>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Backdrop>
  );
};
