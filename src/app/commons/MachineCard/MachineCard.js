import {Link, useRouteMatch} from 'react-router-dom';

import styles from './MachineCard.module.scss'

import {PrimaryBtn} from "app/commons/Buttons/Buttons";

import washer_svg from "app/assets/img/washer-machines.svg";
import dryer_svg from "app/assets/img/dryer-machines.svg";

function MachineCard({machine}) {

  const {url} = useRouteMatch();

  const indicatorColor = machine.available ? "#29B95F" : "#FF7E7E";
  const indicatorMsg = machine.available ? "Disponible" : "En cours d'utilisation";

  console.log(indicatorColor)
  return (
    <div className={styles.container}>
      <img className={styles.machineImg} src={machine.type === "washer" ? washer_svg : dryer_svg} alt=""/>
      <div className={styles.info}>
        <h3>{machine.name}</h3>
        <p className={styles.info__state}><span style={{backgroundColor: indicatorColor}}  className={styles.indicator}></span> {indicatorMsg}</p>
        <p>Type : {machine.type}</p>
        <div className={styles.info__buttons}>
          <Link to={`${url}/${machine.id}`}><PrimaryBtn bgColor="ultraSoft" value="Infos" /></Link>
          <PrimaryBtn value="Reserver" />
        </div>
      </div>
    </div>
  )
}

export default MachineCard
