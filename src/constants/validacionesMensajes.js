export  const validacionesMensajes = ( value ) =>{
    const errors = {  } 
    if( !value.mensaje ){
        errors.mensaje = 'este campo es requerido'
    }
    return errors
}

