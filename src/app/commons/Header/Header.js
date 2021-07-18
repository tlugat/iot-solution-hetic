import styles from './Header.module.scss'
import Nav from "app/commons/Nav/Nav";

import {useAuth} from "app/hooks/useAuth";

function Header() {

  const auth = useAuth();

  return (
    <header className={styles.container}>
      {auth.user && (
        <div className={styles.navContainer}>
         <Nav/> 
        </div>
      )}
    </header>
  )
}

export default Header
