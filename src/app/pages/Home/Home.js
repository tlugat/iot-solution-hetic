import {useAuth} from "app/hooks/useAuth";
import {PrimaryBtn} from "app/commons/Buttons/Buttons";

import styles from './Home.module.scss';

function Home() {
 
  const auth = useAuth();
  
  return (
    <div className={styles.container}>
      <h1>Bienvenue {auth.user.name}</h1>
      <PrimaryBtn arrow value="Se deconnecter" method={auth.logout}>Se deconnecter</PrimaryBtn>
    </div>
  )
}

export default Home
