import {useState} from "react";
import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useAuth} from "app/hooks/useAuth";

import { CustomInput, CustomError } from "app/commons/CustomInput/CustomInput";
import {PrimaryBtn} from "app/commons/Buttons/Buttons";

import styles from "./RegisterForm.module.scss";

const RegisterForm = ({setIsRegistered, setIsLoading, setRegisterError, laundries}) => {


  const auth = useAuth();

  const userSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Le nom renseigné est trop court').required(),
    lastName: Yup.string().min(2, 'Le nom renseigné est trop court').required(),
    email: Yup.string().email("E-mail erroné").required(),
    password: Yup.string().min(6, '6 caractères min.').max(50, '20 caractères max.').required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required(),
    laundry: Yup.string().required()
  });

  const submit = (values, actions) => {
    setIsLoading(true);
    const {name, lastName, email, password, confirmPassword, laundry: laundryId} = values;
    actions.setSubmitting(false);
    const laundry = laundries.find(e => e.id === Number(laundryId));
    auth.register(name, lastName, email, password, confirmPassword, laundry)
    .then(response => {
      setIsLoading(false);
      if(response.status === 200) {
        if(response.data.msg === "Success") {
          setIsRegistered(true)
        }
      } else {
        console.log('test')
      }
    })
    .catch(error => {
       if(error) {
        setIsLoading(false);
        setRegisterError(error)
       }
    });
  } 


  return (      
    <Formik 
    onSubmit={submit} 
    initialValues={{name: "", lastName: "", email: "", password: "", confirmPassword: "", laundry: ""}}
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
          <Field name="lastName" label="Nom" component={CustomInput} />
          <ErrorMessage name="lastName" component={CustomError} />
          <Field name="name" label="Prénom" component={CustomInput} />
          <ErrorMessage name="name" component={CustomError} />
          <Field name="email" type="email" label="Adresse mail" component={CustomInput} />
          <ErrorMessage name="email" component={CustomError} />
          <Field as="select" name="laundry">
            {laundries.map((laundry, i) => <option value={laundry.id} key={i}>{laundry.name}</option>)}
          </Field>
          <ErrorMessage name="laundry" component={CustomError} />
          <Field name="password" type="password" label="Mot de passe" component={CustomInput} />
          <ErrorMessage name="password" component={CustomError} />
          <Field name="confirmPassword" type="password" label="Confirmer le mot de passe" component={CustomInput} />
          <ErrorMessage name="confirmPassword" component={CustomError} />
          <PrimaryBtn customStyles={{height: "54px"}} type="submit" disabled={isSubmitting} value="S'enregistrer"/>
        </form>
      )}
    </Formik> 

  )
}

export default RegisterForm