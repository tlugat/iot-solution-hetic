import { useState, useEffect } from "react";
import { useViewport } from "app/hooks/useViewport";

import {Redirect} from "react-router-dom";
import {useAuth} from "app/hooks/useAuth";
import Loader from "app/commons/Loader/Loader";
import PageContainer from "app/commons/PageContainer/PageContainer";
import Form from 'app/commons/LoginForm/LoginForm';

import washer_img from "app/assets/img/washer-login.png";
import background from "app/assets/img/background.png";

import styles from "./Login.module.scss";

function Login() {

  const { width, breakpoints: {m} } = useViewport();

  const auth = useAuth();

  const [redirectToReferrer, setRedirectToReferrer] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

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
    <PageContainer customStyles={{ backgroundImage: `url(${background})`, height: "calc(100vh - 180px)"}} >
      {
        !isLoading && (
          <div className={styles.container}>
            <div className={styles.formWrapper}>
              <h1 className={styles.title}>Connectez-vous <br/> pour acceder a votre laverie</h1>
              <Form setIsLoading={setIsLoading}/> 
            </div>
            {
              width >= m && <img className={styles.illustration} src={washer_img} alt="washer"/>
            }
          </div>
        )
      }
      {isLoading && <Loader/>}
    </PageContainer>
  )
}

export default Login
