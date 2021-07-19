import {useState} from "react";
import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import {useAuth} from "app/hooks/useAuth";

import { CustomInput, CustomError } from "app/commons/CustomInput/CustomInput";
import {PrimaryBtn} from "app/commons/Buttons/Buttons";

import styles from "./LoginForm.module.scss";


const Form = () => {

  const [loginError, setLoginError] = useState(false);
  
  const auth = useAuth();

  const userSchema = Yup.object().shape({
    email: Yup.string().email("E-mail erroné").min(6, '6 caractères min.').max(100, '100 caractères max.'),
    password: Yup.string().min(6, '6 caractères min.').max(50, '50 caractères max.'),
  });


  const submit = async (values, actions) => {
    const {email, password} = values;
    actions.setSubmitting(false);
    auth.login(email, password)
    .then(response => {
      if(response){
        console.log(response);
        if(response.status !== 200) {
          if(response.data.error) {
            setLoginError(response.data.error)
          } else {
            setLoginError(true)
          }
        }
      } 
    });
  }

  return (  
   
       <Formik 
      onSubmit={submit} 
      initialValues={{email: "", password: ""}}
      validationSchema={userSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isSubmitting,
          errors,
          touched
        }) => (
          <form className={styles.container} onSubmit={handleSubmit} >
            <Field name="email" type="email" label="Email" component={CustomInput} />
            <ErrorMessage name="email" component={CustomError} />
            <Field name="password" type="password" label="Mot de passe" component={CustomInput} />
            <ErrorMessage name="password" component={CustomError} />
            <PrimaryBtn type="submit" disabled={isSubmitting} value="Se connecter"/>
            <p>Don't have an account ? <span><Link to="/register">S'enregistrer</Link></span></p>
            {loginError && <div>{loginError !== true ? loginError : "An error has occured."}</div>}
          </form>
          
        )}
      </Formik>
    
  )
}

export default Form