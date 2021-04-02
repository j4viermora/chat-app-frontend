import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validacionesRegister } from '../constants/formValidate';
import { useContext, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';
import Swal from 'sweetalert2';

export const RegisterPage = () => {
	
	const { register } = useContext( AuthContext )
	const [ disable, turn ] = useState( false )

	const handleRegister = async ( { name , email, password } ) => {

		turn( true )
		const resp = await register( name, email, password );
	
		if( !resp ){
			Swal.fire( 'Error', 'Algunos datos proporcionados son incorrectos', 'error' )
			turn( false )
		}else{
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Registro Exitoso',
				showConfirmButton: false,
				timer: 1500
			  })
		}
	};

	return (

		<Formik
		
		initialValues={{
			name:'',
			email:'',
			password:'',
		}}

		onSubmit={ value => handleRegister( value ) }
		validate={ validacionesRegister }	
		
		>
			<Form className="login100-form validate-form flex-sb flex-w">
						<span className="login100-form-title mb-3">
							Chat - Registro
						</span>

							<ErrorMessage name='name'/>
						<div className="wrap-input100 validate-input mb-3">
							<Field 
							className="input100" 
							type="text" 
							name="name" placeholder="Nombre" />
							<span className="focus-input100"></span>
						</div>

						
							<ErrorMessage name='email'/>
						<div className="wrap-input100 validate-input mb-3">
							<Field 
							className="input100" 
							type="email" 
							name="email" placeholder="Email" />
							<span className="focus-input100"></span>
						</div>
						
						
							<ErrorMessage name='password'/>
						<div className="wrap-input100 validate-input mb-3">
							<Field 
							className="input100" 
							type="password" 
							name="password" placeholder="Password" />
							<span className="focus-input100"></span>
						</div>
						
						<div className="row mb-3">
							<div className="col text-right">
								<Link to="/auth/login" className="txt1">
									¿Ya tienes cuenta?
								</Link>
							</div>
						</div>

						<div className="container-login100-form-btn m-t-17">
							<button 
							disabled={ disable }
							type='submit'
							className="login100-form-btn">
							
								Crear cuenta
							</button>
						</div>
					</Form>





		</Formik>
    )
}
