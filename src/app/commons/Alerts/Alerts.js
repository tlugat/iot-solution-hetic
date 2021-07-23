import styles from "./Alerts.module.scss";

import placeholder from "app/assets/img/alerts-placeholder.png";

function Alerts() {
  return (
    
    <div className={styles.container}>
      <img src={placeholder} alt="placeholder history"/>
      <h3>Prochainement : Vos alertes</h3>
    </div>
   
  )
}

export default Alerts