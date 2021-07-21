import { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";
import {useAuth} from "app/hooks/useAuth";
import { useViewport } from "app/hooks/useViewport";

import laundries from "app/laundries.json";

import PageContainer from "app/commons/PageContainer/PageContainer";
import Form from 'app/commons/RegisterForm/RegisterForm';
import Loader from "app/commons/Loader/Loader";

import washer_png from "app/assets/img/washer-register.png";
import background from "app/assets/img/background.png";

import styles from "./Register.module.scss";

function Register() {

  const { width, breakpoints: {sm, m, l} } = useViewport();

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
    <PageContainer customStyles={{ backgroundImage: `url(${background})`}}>
       {registerError && (
            <div className={styles.error}>
              <p>Une erreur est survenue</p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#FF7E7E" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#fff"/>
              </svg>
            </div>
          )}
      {
        !isLoading && (
          <>
            {isRegistered ? <div>Votre compte a ete enregistre avec succes !</div> : (
              <div className={styles.container}>
                { width < l && <h1 className={styles.brands__title}>Inscrivez-vous <br/> et accedez a de nombreuse fonctionnalites qui vous faciliteront la vie !</h1>}
                <Form setRegisterError={setRegisterError} setIsLoading={setIsLoading} laundries={laundries.laundries} setIsRegistered={setIsRegistered} /> 
                <div className={styles.brands}>
                  <h1 className={styles.brands__title}>Inscrivez-vous <br/> et accedez a de nombreuse fonctionnalites qui vous faciliteront la vie !</h1>
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
