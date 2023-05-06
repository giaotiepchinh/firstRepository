// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage, FastField } from "formik";
import { Input } from "reactstrap";
import InputField from "./InputField";
import { Button, FormGroup, colors, Typography } from "@mui/material";
// import { FormGroup, Spinner, Button } from "reactstrap";
import PropTypes from "prop-types";
import * as Yup from "yup";
import InputFieldPassword from "./InputFieldPassword";

function FormikCustom(props) {
  const { initialValues } = props;

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("This field is required."),
    password: Yup.string().required("This field is required."),

    // categoryId: Yup.number().required("This field is required.").nullable(),

    // photo: Yup.string().when("categoryId", {
    //   is: 1,
    //   then: Yup.string().required("This field is required."),
    //   otherwise: Yup.string().notRequired(),
    // }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;

        return (
          <Form>
            <FastField
              name="userName"
              component={InputField}
              label="User Name"
              placeholder="Typing your user name"
            />
            <FastField
              name="password"
              component={InputFieldPassword}
              label="Password"
              placeholder="Typing your password"
              isIconActive={true}
              type="password"
            />
            <FormGroup>
              <Button
                type="submit"
                color="success"
                variant="contained"
                fullWidth
                sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }}
              >
                Login
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}
export default FormikCustom;
