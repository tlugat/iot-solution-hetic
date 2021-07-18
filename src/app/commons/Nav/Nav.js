import { NavLink } from "react-router-dom";

import styles from "./Nav.module.scss";

function Nav() {
  return (
    <nav className={styles.container}>
     <NavLink activeClassName={styles.active} exact to="/">Home</NavLink>
     <NavLink activeClassName={styles.active} exact to="/dasboard">Dashboard</NavLink>
    </nav>
  )
}

export default Nav
