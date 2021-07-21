import styles from './ModalContactAdmin.module.scss'
import { useAuth } from "app/hooks/useAuth";
import { PrimaryBtn } from "app/commons/Buttons/Buttons";

import avatar_placeholder from "app/assets/img/technician-placeholder-avatar.png";

function ModalContactAdmin({closeModal}) {

  const auth = useAuth();
  const technician = auth.getCurrentUser().laundry.technician

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contacter votre gardien</h2>
      <div className={styles.profile}>
        <div>
          <img src={avatar_placeholder} alt="profile avatar"/>
        </div> 
        <div className={styles.profile__info} >
          <h3>{technician.name}</h3>
          <div className={styles.profile__contact} >
            <span>{technician.email}</span>
            <span>{technician.phone}</span>
          </div>
        </div>
        <div>
          <PrimaryBtn value="Contacter"/>
        </div>
      </div>
      <PrimaryBtn method={closeModal} customStyles={{width: "100%"}} value="Terminé"/>
    </div>
  )
}

export default ModalContactAdmin
