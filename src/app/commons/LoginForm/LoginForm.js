import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import {useAuth} from "app/hooks/useAuth";

import CustomInput from "app/commons/CustomInput/CustomInput";


const CustomError = (props) => <div>{props.children}</div>


const Form = () => {
  
  const auth = useAuth();

  const userSchema = Yup.object().shape({
    email: Yup.string().email("E-mail erroné").min(6, '6 caractères min.').max(100, '100 caractères max.'),
    password: Yup.string().min(6, '6 caractères min.').max(50, '50 caractères max.'),
  });


  const submit = async (values, actions) => {
    const {email, password} = values;
    actions.setSubmitting(false);
    auth.login(email, password);
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
          <form onSubmit={handleSubmit} >
            <Field name="email" type="email" component={CustomInput} />
            <ErrorMessage name="email" component={CustomError} />
            <Field name="password" type="password"  component={CustomInput} />
            <ErrorMessage name="password" component={CustomError} />
            <button type="submit" disabled={isSubmitting}>Login</button>
            <p>Don't have an account ? <span><Link to="/register">Register</Link></span></p>
          </form>
          
        )}
      </Formik>
    
  )
}

export default Form