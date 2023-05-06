import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { colors } from "../theme";
import {
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";

InputFieldPassword.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputFieldPassword.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputFieldPassword(props) {
  const { field, form, type, label, placeholder, disabled, isIconActive } =
    props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const [isVisiable, setisVisiable] = useState(true);
  const handleVisable = () => {
    setisVisiable(!isVisiable);
  };

  return (
    <FormGroup>
      <Box
        display="flex"
        flexDirection="column"
        alignContent="center"
        justifyContent="flex-start"
        mb={2}
      >
        <Box display="flex" flexDirection="column" justifyContent="flex-start">
          <Typography color="white" pb={1}>
            {label}
          </Typography>

          <Paper
            sx={{
              background: colors.input[500],
              width: "100%",
            }}
          >
            <InputBase
              placeholder={placeholder}
              fullWidth
              sx={{
                bgcolor: colors.input[500],
                p: 1,
                borderRadius: "5px",
              }}
              id={name}
              {...field}
              type={isVisiable ? "password" : { type }}
              disabled={disabled}
              invalid={showError}
              endAdornment={
                <InputAdornment
                  position="end"
                  sx={{ pr: 1 }}
                  onClick={handleVisable}
                >
                  <IconButton edge="end">
                    {isVisiable ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Paper>
        </Box>
      </Box>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default InputFieldPassword;
