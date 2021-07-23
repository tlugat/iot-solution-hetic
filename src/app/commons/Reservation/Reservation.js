import styles from "./Reservation.module.scss";

import placeholder from "app/assets/img/Reservation-placeholder.png";

function Reservation() {
  return (
    
    <div className={styles.container}>
      <img src={placeholder} alt="placeholder history"/>
      <h3>Prochainement : Vos alertes</h3>
    </div>
   
  )
}

export default Reservation