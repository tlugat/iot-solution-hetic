import {useAuth} from "app/hooks/useAuth";
import PrimaryBtn from "app/commons/buttons/Primary/PrymaryBtn";
import SecondaryBtn from "app/commons/buttons/Secondary/SecondaryBtn";
import styles from './Home.module.scss';

function Home() {
 
  const auth = useAuth();
  
  return (
    <div className={styles.container}>
      <h1>Bienvenue {auth.user.name}</h1>
      <PrimaryBtn arrow value="Se deconnecter" method={auth.logout}>Se deconnecter</PrimaryBtn>
      <SecondaryBtn arrow="right" rounded value="Se deconnecter" method={auth.logout}>Se deconnecter</SecondaryBtn>
    </div>
  )
}

export default Home
