import { useContext }           from "react"
import { Form, Formik, Field }  from "formik";

import { validacionesMensajes } from "../constants/validacionesMensajes";
import { AuthContext }          from "../auth/AuthContext";
import { ChatContext }          from "../context/chat/ChatContext";
import { SocketContext }        from "../context/SocketContext";

export const SendMesaage = () => {

const { socket }    = useContext( SocketContext );
const { auth }      = useContext( AuthContext );
const { chatState } = useContext( ChatContext );

const enviarMensajes = ( { mensaje }) => {
    console.log('enviando mensaj es...', mensaje )
    socket.emit('mensaje-personal',{
      from: auth.uid ,
      to  : chatState.chatActivo ,
      message: mensaje,
    });
};
 
  return (
    <Formik
      initialValues={{
        mensaje: "",
      }}
      validate={ validacionesMensajes }
      onSubmit={ (values, { resetForm } )=> {
        enviarMensajes( values )
        resetForm();
      }}    
    >
          <Form>
            <div className="type_msg row">
              <div className="input_msg_write col-sm-9">
                <Field
                  type="text"
                  className="write_msg"
                  placeholder="Mensaje..."
                  name="mensaje"
                  autoComplete="off"
                />
              </div>
              <div className="col-sm-3 text-center">
                <button 
                className="msg_send_btn mt-3" 
                type="submit">
                  Enviar
                </button>
              </div>
            </div>
          </Form>  
    </Formik>
  );
};
