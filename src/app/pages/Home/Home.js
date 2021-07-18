import {useAuth} from "app/hooks/useAuth";

import styles from './Home.module.scss';

function Home() {
 
  const auth = useAuth();
  
  return (
    <div className={styles.container}>
      <h1>Bienvenue {auth.user.name}</h1>
      <button onClick={() => auth.logout()}>Se deconnecter</button>
    </div>
  )
}

export default Home
