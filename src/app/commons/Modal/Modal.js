import ReactModal from 'react-modal';

import styles from "./Modal.module.scss";

import cross_logo from "app/assets/img/cross.svg";

const Modal = ({children, open, close, closeBtn}) => {

  return ( 
    <ReactModal ariaHideApp={false} className={styles.modalContent} overlayClassName={styles.modalOverlay} isOpen={open} onRequestClose={close} shouldCloseOnOverlayClick={true}>
      { closeBtn && <span className={styles.close} onClick={close}><img src={cross_logo} alt="cross"/> </span>} 
      <div className={styles.container}>
       {children}
      </div>
    </ReactModal>
  )
}

export default Modal