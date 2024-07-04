import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
});

export const ContactForm = ({ name, number, onAddContact }) => {
  return (
    <Formik
      initialValues={{ name, number }}
      onSubmit={(values, action) => {
        onAddContact(values);
        action.resetForm();
        console.log(false === false);
      }}
      validationSchema={SignupSchema}
    >
      <Form>
        <label htmlFor="name">
          Name
          <Field
            id="name"
            type="text"
            name="name"
            // value={name}
            // onChange={onInputChange}
            required
          />
          <ErrorMessage name="name" />
        </label>
        <label>
          Number
          <Field
            id="number"
            type="tel"
            name="number"
            // value={number}
            // onChange={onInputChange}
            required
          />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
