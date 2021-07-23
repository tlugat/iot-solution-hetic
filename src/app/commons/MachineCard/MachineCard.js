import {Link, useRouteMatch} from 'react-router-dom';
import {useState} from 'react';

import styles from './MachineCard.module.scss'

import {PrimaryBtn} from "app/commons/Buttons/Buttons";
import Modal from "app/commons/Modal/Modal";
import Reservation from 'app/commons/Reservation/Reservation';

import washer_svg from "app/assets/img/washer-machines.svg";
import dryer_svg from "app/assets/img/dryer-machines.svg";

function MachineCard({machine}) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    if(!modalIsOpen ) {
      setModalIsOpen(true)
    } 
  }

  const handleCloseModal = () => {
    if(modalIsOpen) {
      setModalIsOpen(false);
    }
  }

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
          <PrimaryBtn method={handleOpenModal} value="Reserver" />
        </div>
      </div>
      <Modal open={modalIsOpen} close={handleCloseModal} closeBtn={true} >
        <Reservation closeModal={handleCloseModal}/>
      </Modal>
    </div>
  )
}

export default MachineCard
