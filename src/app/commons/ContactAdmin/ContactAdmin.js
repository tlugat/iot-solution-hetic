import {useState} from 'react';

import styles from './ContactAdmin.module.scss'

import {PrimaryBtn} from "app/commons/Buttons/Buttons";
import Modal from "app/commons/Modal/Modal";
import ModalContactAdmin from '../ModalContactAdmin/ModalContactAdmin';

function ContactAdmin() {

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

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Besoin d'aide ?</h2>
      <p>
        Pour contacter l’administrateur vous avez plusieurs possibilités. 
        <br/>
        Dans un premier temps vous poouvez lui envoyer un mail ou l’appeler au
        <br/>
        numéro suivant : <span className={styles.phone}>00 00 00 00 00</span>
      </p>
      <PrimaryBtn method={handleOpenModal} customStyles={{backgroundColor: "#97D8EC"}} value="Contacter l'administrateur"/>
      <Modal open={modalIsOpen} close={handleCloseModal} closeBtn={true} >
        <ModalContactAdmin closeModal={handleCloseModal}/>
      </Modal>
    </div>
  )
}

export default ContactAdmin
