import styles from './MachineCard.module.scss'

import {PrimaryBtn} from "app/commons/Buttons/Buttons";

function MachineCard({machine}) {
  return (
    <div className={styles.container}>
      {/* <img src={} alt=""/> */}
      <div className={styles.info}>
        <h3>{machine.name}</h3>
        <p>{machine.type}</p>
        <div className={styles.info__buttons}>
          <PrimaryBtn value="Infos" />
          <PrimaryBtn value="Reserver" />
        </div>
      </div>
    </div>
  )
}

export default MachineCard
