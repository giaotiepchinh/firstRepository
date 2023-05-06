import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MainLayout from "../layout/MainLayout";
import SigninPage from "./SigninPage";
import TitleBox from "./TitleBox";
import Auth from "../../../hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CustomInput from "./CustomInput";
import {
  Box,
  Button,
  Checkbox,
  colors,
  InputBase,
  Typography,
} from "@mui/material";
import FormikCustom from "./FormikCustom";
import authServices from "../../../services/authServices";
import axios from "axios";

// import QuestionPage from "./components/QuestionPage";
// import MainLayout from "../layout/MainLayout";

// const nav = useNavigate();
// useEffect(()=>{
//   if(auth != null)
//     nav("/home");
// },[])

const Login: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const initialValues = {
    userName: "",
    password: "",
  };

  interface body {
    userName: string;
    password: string;
  }
  // const nav = useNavigate();

  const handleSubmit = (values: any) => {
    const GetToken = async () => {
      // debugger;
      const account: body = {
        userName: values.userName,
        password: values.password,
      };

      // const res = await authServices.postLogin(account);
      // console.log(res);
      // if (res.status == 200) return res;

      const data = await axios.post("https://localhost:7244/api/Auth", account);
      console.log(data);
    };

    const respons = GetToken();
    console.log(respons);
  };

  return (
    <MainLayout>
      <Box
        sx={{
          width: {
            sm: "90vw",
            xs: "90vw",
            md: "60vw",
            lg: "60vw",
            xl: "60vw",
          },
        }}
      >
        {/* GRID SYSTEM */}
        <Grid container height="90vh">
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
                {/* <CustomInput
                  label="Login"
                  placeholder="Enter your login..."
                  isIconActive={false}
                  onChange={(values) => {
                    setUserName(values);
                  }}
                /> */}
                <FormikCustom
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                />
              </Box>
            </Box>
          </Grid>

          <TitleBox />
        </Grid>
        {/* GRID SYSTEM END */}
      </Box>
    </MainLayout>
  );
};

export default Login;
