import styles from "./AdminDashboard.module.scss";

import placeholder from "app/assets/img/dashboard/dashboard-placeholder.png";

function AdminDashboard() {
  return (
    
    <div className={styles.container}>
      <img src={placeholder} alt="placeholder history"/>
      <h3>Prochainement : Votre dashboard</h3>
    </div>
   
  )
}

export default AdminDashboard
