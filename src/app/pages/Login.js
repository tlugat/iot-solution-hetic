import { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";
import {useAuth} from "app/hooks/useAuth";

import PageContainer from "app/commons/PageContainer/PageContainer";
import Form from 'app/commons/LoginForm/LoginForm';

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
      <Form/>
    </PageContainer>
  )
}

export default Login
