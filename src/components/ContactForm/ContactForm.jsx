import { Formik } from 'formik';
import {
  StyledForm,
  StyledLabel,
  StyledField,
  StyledErrorMessage,
  StyledButton,
} from './ContactForm.styled';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(20, 'Too large!!!')
    .required('The field is required'),
  number: Yup.string()
    .min(5, 'Too short!')
    .max(20, 'Too large!!!')
    .required('The field is required'),
});

export const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <StyledLabel>
          Name
          <StyledField type="text" name="name" placeholder="Name" />
          <StyledErrorMessage name="name" />
        </StyledLabel>
        <StyledLabel>
          Number
          <StyledField type="text" name="number" placeholder="Number" />
          <StyledErrorMessage name="number" />
        </StyledLabel>
        <StyledButton type="submit">Add Contact</StyledButton>
      </StyledForm>
    </Formik>
  );
};
