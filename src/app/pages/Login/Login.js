import { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";
import {useAuth} from "app/hooks/useAuth";

import PageContainer from "app/commons/PageContainer/PageContainer";
import Form from 'app/commons/LoginForm/LoginForm';

import washer_img from "app/assets/img/washer-login.png";

import styles from "./Login.module.scss";

function Login() {
  const auth = useAuth();
  const [redirectToReferrer, setRedirectToReferrer] = useState(false)

  useEffect(() => {
    if(auth.user) {
      setRedirectToReferrer(true)
    } else {
      setRedirectToReferrer(false);
    }
  }, [auth]);

  if(redirectToReferrer) {
    return <Redirect to="/"/>
  }

  return (
    <PageContainer>
      <div className={styles.container}>
        <Form/> 
        <div className={styles.brands}>
          <h1>Connectez-vous <br/> pour acceder a votre laverie</h1>
          <img src={washer_img} alt="washer"/>
        </div>
      </div>
    </PageContainer>
  )
}

export default Login
