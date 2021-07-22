import styles from './Menu.module.scss'
import Nav from "app/commons/Nav/Nav";

function Menu() {
  return (
    <div className={styles.container}>
      <Nav/>
    </div>
  )
}

export default Menu
