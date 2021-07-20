import { NavLink } from "react-router-dom";

import styles from "./Nav.module.scss";

function Nav() {
  return (
    <nav className={styles.container}>
     <NavLink className={styles.link} activeClassName={styles.active} exact to="/">Home</NavLink>
     <NavLink className={styles.link} activeClassName={styles.active} exact to="/dashboard">Dashboard</NavLink>
    </nav>
  )
}

export default Nav
