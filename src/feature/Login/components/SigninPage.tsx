import {
  Box,
  Button,
  Checkbox,
  colors,
  InputBase,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import Formik from "formik";
// import { useCallback } from "react";
// import { useNavigate } from "react-router";
import CustomInput from "./CustomInput";
// import FormikCustom from "./FormikCustom";
// import { BrowserRouter, Route } from 'react-router-dom';

const SigninPage: React.FC = () => {
  //    const navigate = useNavigate();
  //    console.log(navigate);

  //   const gotoQuestion = useCallback(() => {
  //     navigate("./QuestionPage")
  // }, [navigate]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    //Login;
  };

  return (
    <Grid
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      minHeight={550}
      sx={{
        boxShadow: {
          xs: "",
          sm: "",
          md: "15px 2px 5px -5px",
          lg: "15px 2px 5px -5px",
          xl: "15px 2px 5px -5px",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 24, 57, 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          borderRadius: {
            xs: "30px",
            sm: "30px",
            md: "30px 0 0 30px",
            lg: "30px 0 0 30px",
            xl: "30px 0 0 30px",
          },
        }}
      >
        <Box width="50%">
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* LOGO */}
            <Box
              sx={{
                mt: "60px",
                width: "150px",
                height: "50px",
                bgcolor: "primary.main",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 20px ${colors.green[500]}`,
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="white">
                CareerAI
              </Typography>
            </Box>
            {/* LOGO END */}

            <Typography
              color="white"
              fontWeight="bold"
              sx={{ textAlign: "center", marginTop: 4, marginBottom: 0 }}
              mt={7}
              mb={1}
            >
              Simplifies connecting, augmenting your career
            </Typography>
            <Typography
              color="white"
              fontWeight="bold"
              sx={{ textAlign: "center", margin: 0 }}
              mt={7}
              mb={3}
            ></Typography>
            <Typography
              color="white"
              fontWeight="bold"
              sx={{ textAlign: "center", marginTop: 4 }}
              mt={7}
              mb={3}
            >
              Sign in to our ConnectU
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default SigninPage;
