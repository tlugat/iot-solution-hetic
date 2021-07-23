import Module from "app/commons/Module/Module";
import styles from "./MachineHistory.module.scss";

import placeholder from "app/assets/img/History.png";

function MachineHistory() {
  return (
    
      <div className={styles.container}>
        <img src={placeholder} alt="placeholder history"/>
        <h3>Prochainement : Historique machine</h3>
      </div>
  )
}

export default MachineHistory
