import {useState} from "react";
import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useAuth} from "app/hooks/useAuth";

import { CustomInput, CustomError } from "app/commons/CustomInput/CustomInput";
import {PrimaryBtn} from "app/commons/Buttons/Buttons";

import styles from "./RegisterForm.module.scss";

const RegisterForm = ({setIsRegistered}) => {

  const auth = useAuth();

  const [registerError, setRegisterError] = useState("");

  const userSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Le nom renseigné est trop court'),
    lastName: Yup.string().min(2, 'Le nom renseigné est trop court'),
    email: Yup.string().email("E-mail erroné"),
    password: Yup.string().min(6, '6 caractères min.').max(50, '20 caractères max.'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const submit = async (values, actions) => {
    const {name, lastName, email, password, confirmPassword} = values;
    actions.setSubmitting(false);
    auth.register(name, lastName, email, password, confirmPassword)
    .then(response => {
      if(response.data.msg === "Success") setIsRegistered(true)
      else if(response.data.error) setRegisterError(response.data.error)
    })
    .catch(error => console.log(error));
  } 


  return (      
    <Formik 
    onSubmit={submit} 
    initialValues={{name: "", lastName: "", email: "", password: "", confirmPassword: ""}}
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
        <form className={styles.container}  onSubmit={handleSubmit}>
          <Field name="lastName" component={CustomInput} />
          <ErrorMessage name="lastName" component={CustomError} />
          <Field name="name" component={CustomInput} />
          <ErrorMessage name="name" component={CustomError} />
          <Field name="email" type="email" component={CustomInput} />
          <ErrorMessage name="email" component={CustomError} />
          <Field name="password" type="password"  component={CustomInput} />
          <ErrorMessage name="password" component={CustomError} />
          <Field name="confirmPassword" type="password"  component={CustomInput} />
          <ErrorMessage name="confirmPassword" component={CustomError} />
          <PrimaryBtn type="submit" disabled={isSubmitting} value="Register"/>
          {registerError && <div>{registerError}</div>}
        </form>
        
      )}
    </Formik> 

  )
}

export default RegisterForm