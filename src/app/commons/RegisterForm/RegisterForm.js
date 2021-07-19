import {useState} from "react";
import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useAuth} from "app/hooks/useAuth";

import { CustomInput, CustomError } from "app/commons/CustomInput/CustomInput";
import {PrimaryBtn} from "app/commons/Buttons/Buttons";

import styles from "./RegisterForm.module.scss";

const RegisterForm = ({setIsRegistered, laundries}) => {


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
    const {name, lastName, email, password, confirmPassword, laundry: laundryId} = values;
    actions.setSubmitting(false);
    const laundry = laundries.find(e => e.id === Number(laundryId));
    auth.register(name, lastName, email, password, confirmPassword, laundry)
    .then(response => {
      if(response.status === 200) {
        if(response.data.msg === "Success") setIsRegistered(true)
      } 
    })
    .catch(error => {
       setRegisterError(error);
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
          {registerError && (
            <div className={styles.error}>
              <p>Une erreur est survenue</p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#FF7E7E" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#fff"/>
              </svg>
            </div>
          )}
        </form>
      )}
    </Formik> 

  )
}

export default RegisterForm