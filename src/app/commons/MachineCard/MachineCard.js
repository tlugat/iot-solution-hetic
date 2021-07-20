import {Link} from 'react-router-dom';

import styles from './MachineCard.module.scss'

import {PrimaryBtn} from "app/commons/Buttons/Buttons";

import washer_svg from "app/assets/img/washer-machines.svg";
import dryer_svg from "app/assets/img/dryer-machines.svg";

function MachineCard({machine}) {



  return (
    <div className={styles.container}>
      <img className={styles.machineImg} src={machine.type === "washer" ? washer_svg : dryer_svg} alt=""/>
      <div className={styles.info}>
        <h3>{machine.name}</h3>
        <p>Type : {machine.type}</p>
        <div className={styles.info__buttons}>
          <Link exact to="/machine-profile"><PrimaryBtn bgColor="ultraSoft" value="Infos" /></Link>
          <PrimaryBtn value="Reserver" />
        </div>
      </div>
    </div>
  )
}

export default MachineCard
