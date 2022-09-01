import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/router";

import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { useMutation, useQuery, gql } from "@apollo/client";
import { TextField, Alert, Stack } from "@mui/material";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import styles from "../../styles/Account.module.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <span>Golden Talent</span>
      {" ©"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const AUTHENTICATE_USER = gql`
  mutation authenticateUser($input: AuthenticateUser) {
    authenticateUser(input: $input) {
      token
    }
  }
`;

const theme = createTheme();

export default function Login() {
  //Routing
  const router = useRouter();
  //state para mensaje
  const [mensaje, guardarMensaje] = useState(null);
  const [mensajeTrue, guardarMensajeTrue] = useState(null);
  //Mutation
  const [authenticateUser] = useMutation(AUTHENTICATE_USER);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es válido")
        .required("El email no puede ir vacio."),
      password: Yup.string().required("El password es obligatorio"),
    }),
    onSubmit: async (valores) => {
      const { email, password } = valores;
      try {
        const { data } = await authenticateUser({
          variables: {
            input: {
              email,
              password,
            },
          },
        });

        guardarMensajeTrue("Autenticando...");

        //Guardar Token en localstorage
        const { ok, token, refreshToken } = data.authenticateUser;
        localStorage.setItem("token", token);
        /* HAY QUE CREAR ESTA RUTA */
        router.push("/");
      } catch (error) {
        guardarMensaje(error.message.replace("GraphQL error: ", ""));
      }
    },
  });

  const mostrarMensaje = () => {
    return (
      <div>
        <Alert severity="error">
          <p>{mensaje}</p>
        </Alert>
      </div>
    );
  };

  const mostrarMensajeTrue = () => {
    return (
      <div>
        <Alert severity="success">
          <p>{mensajeTrue}</p>
        </Alert>
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/gtalentgt.appspot.com/o/logotipos-golden%2Fhoe-werkt-factoring.jpg?alt=media&token=bc50a078-8cd0-4ad4-827f-ec84c9f682c9)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar sesión
            </Typography>
            {mensaje && mostrarMensaje()}
            {mensajeTrue && mostrarMensajeTrue()}
            <form onSubmit={formik.handleSubmit}>
              <div className={styles.DivTextLogin}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                  <Stack sx={{ width: "100%" }}>
                    <Alert severity="warning">
                      <p>{formik.errors.email}</p>
                    </Alert>
                  </Stack>
                </div>
              ) : null}

              <div className={styles.DivTextLogin}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>

              {formik.touched.password && formik.errors.password ? (
                <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                  <Stack sx={{ width: "100%" }}>
                    <Alert severity="warning">
                      <p>{formik.errors.password}</p>
                    </Alert>
                  </Stack>
                </div>
              ) : null}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesión
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
