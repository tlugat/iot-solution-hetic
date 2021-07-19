import { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";
import {useAuth} from "app/hooks/useAuth";

import laundries from "app/laundries.json";

import PageContainer from "app/commons/PageContainer/PageContainer";
import Form from 'app/commons/RegisterForm/RegisterForm';

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
      {isRegistered ? <div>Votre compte a ete enregistre avec succes !</div> : <Form laundries={laundries.laundries} setIsRegistered={setIsRegistered} /> }
    </PageContainer>
  )
}

export default Register
