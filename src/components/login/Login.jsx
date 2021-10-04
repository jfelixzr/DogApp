import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { Button } from "./Registro";
import { Input } from "./Registro";

import {
  loginFacebook,
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../actions/authAction";
import { Link } from "react-router-dom";

const Google = styled.div`
  border-radius: 50px;
`;

const Login = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email required"),
      password: Yup.string()
        .min(8, "La contraseña es muy corta - debe tener minimo 8 caracteres.")
        .matches(
          /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S/,
          "La contraseña debe tener un numero, una mayuscula y un minuscula."
        )
        .required("Excribe tu contraseña."),
    }),
    onSubmit: () => {
      dispatch(startLoginEmailPassword(email, password));
    },
  });

  const { email, password } = formik.values;

  const handleLoginGoogle = () => {
    dispatch(startGoogleLogin());
  };
  const handleLoginFacebook = () => {
    dispatch(loginFacebook());
  };
  return (
    <div className="Registro py-4 container text-center w-25">
      <form className="form-signin" onSubmit={formik.handleSubmit}>
        {/* <Link to="/"><Logo src={logo} alt="logo" /></Link>*/}
        <h2>Inicia sesión</h2>
        <p className="m-0">Email</p>
        <Input
          type="email"
          name="email"
          id="inputEmail"
          className="form-control mb-4"
          placeholder="Email"
          required=""
          value={email}
          onChange={formik.handleChange}
        />

        <p className="m-0">Contraseña</p>

        <Input
          type="Password"
          id="inputPassword"
          name="password"
          className="form-control mb-5"
          placeholder="Contraseña"
          required=""
          value={password}
          onChange={formik.handleChange}
        />

        <div className="d-grid gap-2">
          <Button className="btn btn-primary" type="submit">
            Ingresar
          </Button>
        </div>

        <div className="text-white">
          <p>Login with social networks</p>

          <Google
            className="google-btn btn-danger mb-3"
            onClick={handleLoginGoogle}
          >
            <div className="google-icon-wrapper d-flex justify-content-evenly align-items-center">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
              <p className="align-items-center p-2 m-0">
                <b>Sign in with google</b>
              </p>
            </div>
          </Google>
          <Google
            className="google-btn btn-primary mb-3"
            onClick={handleLoginFacebook}
          >
            <div className="google-icon-wrapper d-flex justify-content-evenly align-items-center">
              <img
                className="google-icon img-fluid"
                style={{ width: "30px" }}
                src="https://cdn.icon-icons.com/icons2/642/PNG/512/facebook_icon-icons.com_59205.png"
                alt="facebook button"
              />
              <p className="align-items-center p-2 m-0">
                <b>Sign in with facebook</b>
              </p>
            </div>
          </Google>
          <p className="text-dark">
            ¿Aún no tienes cuenta? <Link to="/auth/registro">Registrate</Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
