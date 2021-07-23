import styles from "./UserReservations.module.scss";

import placeholder from "app/assets/img/userReservations.png";

function UserReservations() {
  return (
    
    <div className={styles.container}>
      <img src={placeholder} alt="placeholder history"/>
      <h3>Prochainement : Votre historique</h3>
    </div>
   
  )
}

export default UserReservations