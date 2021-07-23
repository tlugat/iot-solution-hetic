import {useAuth} from "app/hooks/useAuth";
import {useParams} from "react-router-dom";

import styles from './MachineProfile.module.scss';

import PageContainer from "app/commons/PageContainer/PageContainer";
import Module from "app/commons/Module/Module";
import MachineHistory from "app/commons/MachineHistory/MachineHistory";

import washer_svg from "app/assets/img/washer-machines.svg";
import dryer_svg from "app/assets/img/dryer-machines.svg";

import degree_logo from "app/assets/img/machine-profile/attributes/degree-logo.svg";
import volume_logo from "app/assets/img/machine-profile/attributes/volume-logo.svg";
import charge_logo from "app/assets/img/machine-profile/attributes/charge-logo.svg";
import spin_logo from "app/assets/img/machine-profile/attributes/spin-logo.svg";

function MachineProfile() {

  const auth = useAuth();
  const user = auth.getCurrentUser();

  let { id } = useParams();
  
  const machine = user.laundry.laundry.find(el => el.id === Number(id));

  return (
    <PageContainer>
      <div className={styles.container}>
        <Module>
          <div className={styles.header}>
            <img className={styles.header__machineImg} src={machine.type === "washer" ? washer_svg : dryer_svg} alt="washer"/>
            <div>
              <h1>{machine.name}</h1>
              <span>{user.laundry.name}</span>
            </div>
          </div>
        </Module>
        <Module>
          <div className={styles.attributes}>
            <div className={styles.attributes__item}>
              <img src={spin_logo} alt="alarm clock"/>
              <div className={styles.info}>
                <span className={styles.info__value}>{`${machine.info.spin} Trs/min`}</span>
                <span className={styles.libelle}>Vitesse d'essorage</span>
              </div>
            </div>
            <div className={styles.attributes__item}>
              <img src={degree_logo} alt="thermometer"/>
              <div className={styles.info}>
                <span className={styles.info__value}>{`${machine.info.degree.min}/${machine.info.degree.max} deg.`}</span>
                <span className={styles.libelle}>Degres min/max</span>
              </div>
            </div>
            <div className={styles.attributes__item}>
              <img src={charge_logo} alt="a weight"/>
              <div className={styles.info}>
                <span className={styles.info__value}>{`${machine.info.capacity} kg`}</span>
                <span className={styles.libelle}>Capacité standard</span>
              </div>
            </div>
            <div className={styles.attributes__item}>
              <img src={volume_logo} alt="washer"/>
              <div className={styles.info}>
                <span className={styles.info__value}>{`${machine.info.volume} L`}</span>
                <span className={styles.libelle}>Volume du tambour</span>
              </div>
            </div>
          </div>
        </Module>
        <MachineHistory/>
      </div>
    </PageContainer>
  )
}

export default MachineProfile
