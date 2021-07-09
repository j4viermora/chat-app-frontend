import { useContext, useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { validacionesLogin } from "../constants/validacionesLogin";


export const LoginPage = () => {

  const { login } = useContext( AuthContext )
  const [ active, setActive ] = useState( false )

  const handlerSubmit = async ( { emailRaw = "", password, rememberme } ) => {

    const email = emailRaw.toLocaleLowerCase();

    setActive( true )
    const status = await login( email, password )
        
    if( !status ){
      Swal.fire( 'Error', 'Algo salió mal verifique usuario y contraseña', 'error' )
      setActive( false )
    }
    if( rememberme ){
      localStorage.setItem( 'email', JSON.stringify( email ) )
    }

  }

  const remembermeEmail = JSON.parse( localStorage.getItem( 'email' ) ) || null

	return (
    <Formik
      initialValues={
        (remembermeEmail)
        ?{
        email: remembermeEmail,
        password: "",
        rememberme: false,
        }
        :
        {
        email: "",
        password: "",
        rememberme: false,
        }
    }
      onSubmit={(value) => handlerSubmit( value ) }
	    validate={ validacionesLogin }
    >
      <Form className="login100-form validate-form flex-sb flex-w">
        <span className="login100-form-title mb-3">Chat - Ingreso</span>
			<ErrorMessage name='email' />
        <div className="wrap-input100 validate-input mb-3">
          <Field
            className="input100"
            type="email"
            name="email"
            placeholder="Email"
          />
          <span className="focus-input100"></span>
        </div>

		<ErrorMessage name='password' />
        <div className="wrap-input100 validate-input mb-3">
          <Field
            className="input100"
            type="password"
            name="password"
            placeholder="Password"
          />
          <span className="focus-input100"></span>
        </div>

        <div className="row mb-3">
          <div className="col">
            <Field
              type="checkbox"
              name="rememberme"
            />
			<br/>
            <label>Recordarme</label>
          </div>

          <div className="col text-right">
            <Link to="/auth/register" className="txt1">
              ¿Nueva cuenta?
            </Link>
          </div>
        </div>

        <div className="container-login100-form-btn m-t-17">
          <button
          className="login100-form-btn"
          type='submit'
          disabled={ active }
          >
            Ingresar
          </button>
        </div>
      </Form>
    </Formik>
  );
};
