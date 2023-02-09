import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const DynamicForm = (props) => {
  const validationSchema = Yup.object().shape({
    ...props.fieldDefinitions.reduce((acc, field) => {
      let validation;
      switch (field.type) {
        case "text":
        case "password":
          validation = Yup.string().required(`${field.label} is required`);
          break;
        case "number":
          validation = Yup.number().required(`${field.label} is required`).typeError(`${field.label} must be a number`).positive(`${field.label} must be a positive number`);
          break;
        case "email":
          validation = Yup.string().required(`${field.label} is required`).email(`${field.label} must be a valid email`);
          break;
        case "date":
          validation = Yup.date().required(`${field.label} is required`).min(new Date(), `${field.label} must be in the future`);
          break;
        case "checkbox":
          validation = Yup.boolean().required(`${field.label} is required`);
          break;
        default:
          validation = Yup.string().required(`${field.label} is required`);
          break;
      }
      acc[field.name] = validation;
      return acc;
    }, {}),
  });

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={validationSchema}
      onSubmit={props.handleSubmit}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
        <Form>
          {props.fieldDefinitions.map((field, index) => (
            <div key={index}>
              <label htmlFor={field.name}>{field.label}</label>
              {field.type === "checkbox" ? (
                <Field
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  checked={values[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              ) : (
                <Field
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={values[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              )}
              {errors[field.name] && <div>{errors[field.name]}</div>}
            </div>
          ))}
          <button type="submit">Save</button>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;
