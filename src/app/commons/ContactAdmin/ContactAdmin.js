import styles from './ContactAdmin.module.scss'
import {PrimaryBtn} from "app/commons/Buttons/Buttons";
function ContactAdmin() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact admin</h2>
      <p>
        Pour contacter l’administrateur vous avez plusieurs possibilités. 
        <br/>
        Dans un premier temps vous poouvez lui envoyer un mail ou l’appeler au
        <br/>
        numéro suivant : <span className={styles.phone}>00 00 00 00 00</span>
      </p>
      <PrimaryBtn customStyles={{backgroundColor: "#97D8EC"}} value="Contacter l'administrateur"/>
    </div>
  )
}

export default ContactAdmin
