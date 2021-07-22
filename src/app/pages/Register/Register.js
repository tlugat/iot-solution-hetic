import { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";
import {useAuth} from "app/hooks/useAuth";
import { useViewport } from "app/hooks/useViewport";

import laundries from "app/laundries.json";

import PageContainer from "app/commons/PageContainer/PageContainer";
import Form from 'app/commons/RegisterForm/RegisterForm';
import Loader from "app/commons/Loader/Loader";
import AuthError from "app/commons/AuthError/AuthError";

import washer_png from "app/assets/img/washer-register.png";
import success_logo from "app/assets/img/success.svg";
import background from "app/assets/img/background.png";

import styles from "./Register.module.scss";

function Register() {

  const { width, breakpoints: { l } } = useViewport();

  const [registerError, setRegisterError] = useState(false);

  const [redirectToReferrer, setRedirectToReferrer] = useState(false)
  const auth = useAuth();

  useEffect(() => {
    if(auth.user) {
      setRedirectToReferrer(true)
    } else {
      setRedirectToReferrer(false);
    }
  }, [auth]);

  const [isLoading, setIsLoading] = useState(false);

  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => { 
    if(isRegistered) {
      const timer = setTimeout(() => {
      setRedirectToReferrer(true);
    }, 3000);
    return () => clearTimeout(timer);
    }
  })

  if(redirectToReferrer) {
    return <Redirect to="/"/>
  }

  return (
    <PageContainer customStyles={{ backgroundImage: `url(${background})`, height: "calc(100vh - 180px)"}}>
       <AuthError error={registerError}/> 
      {
        
        !isLoading && (
          <>
            {isRegistered ? (
              <div className={styles.success}>
                <p>Votre compte a bien été créé !</p>
                <img src={success_logo} alt="check in circle"/>
              </div>
            ) : (
              <div className={styles.container}>
                { width < l && <h1 className={styles.brands__title}>Inscrivez-vous <br/> et accedez a de nombreuses fonctionnalites qui vous faciliteront la vie !</h1>}
                <Form setRegisterError={setRegisterError} setIsLoading={setIsLoading} laundries={laundries.laundries} setIsRegistered={setIsRegistered} /> 
                <div className={styles.brands}>
                  <h1 className={styles.brands__title}>Inscrivez-vous <br/> et accedez a de nombreuses fonctionnalites qui vous faciliteront la vie !</h1>
                  <img src={washer_png} alt="washer"/>
                </div>
              </div>
        )}
          </>
        )
      }

      {isLoading && <Loader/>}
    </PageContainer>
  )
}

export default Register
