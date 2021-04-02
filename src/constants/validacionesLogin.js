export const validacionesLogin = values => {
    
    const errors = {};

    if (!values.email) {
      errors.email = 'Este campo es requerido';
    } else if ( values.email.length > 30) {
      errors.email = 'Must be 15 characters or less';
    }
  
    if (!values.password) {
      errors.password = 'Este campo es requerido';
    } else if (values.password.length < 6) {
      errors.password = 'Clave debe tener 6 o más carácteres';
    }
    return errors;
  };