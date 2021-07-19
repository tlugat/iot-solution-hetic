import { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";
import {useAuth} from "app/hooks/useAuth";

import laundries from "app/laundries.json";

import PageContainer from "app/commons/PageContainer/PageContainer";
import Form from 'app/commons/RegisterForm/RegisterForm';

import washer_svg from "app/assets/img/washer-register.svg";

import styles from "./Register.module.scss";

function Register() {

  const [redirectToReferrer, setRedirectToReferrer] = useState(false)
  const auth = useAuth();

  useEffect(() => {
    if(auth.user) {
      setRedirectToReferrer(true)
    } else {
      setRedirectToReferrer(false);
    }
  }, [auth]);

  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => { 
    if(isRegistered) {
      const timer = setTimeout(() => {
      setRedirectToReferrer(true);
    }, 6000);
    return () => clearTimeout(timer);
    }
  })

  if(redirectToReferrer) {
    return <Redirect to="/"/>
  }

  return (
    <PageContainer>
      {isRegistered ? <div>Votre compte a ete enregistre avec succes !</div> : (
        <div className={styles.container}>
          <Form laundries={laundries.laundries} setIsRegistered={setIsRegistered} /> 
          <div className={styles.brands}>
            <h1>Inscrivez-vous <br/> et accedez a de nombreuse fonctionnalites qui vous faciliteront la vie !</h1>
            <img src={washer_svg} alt="washer"/>
          </div>
        </div>
      )}
    </PageContainer>
  )
}

export default Register
