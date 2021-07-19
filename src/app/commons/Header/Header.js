import {useAuth} from "app/hooks/useAuth";

import styles from './Header.module.scss'
import Nav from "app/commons/Nav/Nav";
import Dropdown from "app/commons/Dropdown/Dropdown";

function Header() {

  const auth = useAuth();

  
  return (
    <header className={styles.container}>
      {auth.user && (
        <>
          <div className={styles.navContainer}>
          <Nav/> 
          </div>
          <Dropdown/>
        </>
      )}
    </header>
  )
}

export default Header
