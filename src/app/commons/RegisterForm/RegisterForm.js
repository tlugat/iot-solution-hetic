import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import authService from 'app/services/auth/auth-service';


const CustomInput = ({field, form, ...props}) => {
  return (
    <div>
      <label>{field.name}</label>
      <input {...field} {...props} ></input>
    </div>
  )
}

const CustomError = (props) => <div>{props.children}</div>


const RegisterForm = () => {
  

  const userSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Le nom renseigné est trop court'),
    lastName: Yup.string().min(2, 'Le nom renseigné est trop court'),
    email: Yup.string().email("E-mail erroné"),
    password: Yup.string().min(6, '6 caractères min.').max(50, '20 caractères max.'),
    // password2: Yup.string().min(6, '6 caractères min.').max(50, '20 caractères max.'),
  });

  const submit = async (values, actions) => {
    const {name, lastname, email, password} = values;
    actions.setSubmitting(false);
    const token = await authService.register(name, lastname, email, password);
    // sessionStorage.setItem('userName', name);
    // setToken(token.data.token);
  } 


  return (  
    
    
       <Formik 
      onSubmit={submit} 
      initialValues={{name: "", lastName: "", email: "", password: ""}}
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
          <form  onSubmit={handleSubmit}>
            <Field name="name" component={CustomInput} />
            <ErrorMessage name="name" component={CustomError} />
            <Field name="lastName" component={CustomInput} />
            <ErrorMessage name="lastName" component={CustomError} />
            <Field name="email" type="email" component={CustomInput} />
            <ErrorMessage name="email" component={CustomError} />
            <Field name="password" type="password"  component={CustomInput} />
            <ErrorMessage name="password" component={CustomError} />
            <button type="submit" disabled={isSubmitting}>Sign up</button>
          </form>
          
        )}
      </Formik> 

  )
}

export default RegisterForm