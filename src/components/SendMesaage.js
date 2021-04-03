import { Form, Formik, Field } from "formik";

export const SendMesaage = () => {
  

 
  return (
    <Formik
      initialValues={{
        contentMessage: "",
      }}
      onSubmit={ (value, { resetForm } )=> {
        console.log(value);
        resetForm();
      }}
    >
      {(formProps) => {
        return (
          <Form>
            <div className="type_msg row">
              <div className="input_msg_write col-sm-9">
                <Field
                  type="text"
                  className="write_msg"
                  placeholder="Mensaje..."
                  name="contentMessage"
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
        );
      }}
    </Formik>
  );
};
