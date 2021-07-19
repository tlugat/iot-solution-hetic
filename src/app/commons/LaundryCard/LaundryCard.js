import {useAuth} from "app/hooks/useAuth";

import styles from './LaundryCard.module.scss';

import laundry_img from "app/assets/img/laundry-img.png";
import dryer_logo from "app/assets/img/dryer-logo.svg";
import washer_logo from "app/assets/img/washer-logo.svg"

function LaundryCard() {;

  const auth = useAuth();
  const laundry = auth.getCurrentUser().laundry;

  const washers = laundry.laundry.filter(machine => machine.type === "washer");
  const dryers = laundry.laundry.filter(machine => machine.type === "dryer");

  return (
    <div className={styles.container}>
      <img className={styles.laundryImg} src={laundry_img} alt={`View of ${laundry.name}`}/>
      <div className={styles.info}>
        <h1>{laundry.name}</h1>
        <p>Votre laverie {laundry.name} vous propose un service  Laundry Room qui va vous permettre de gerer votre laverie d’une main d’expert  </p>
        <div className={styles.info__machines}>
          {washers && (
            <div>
              <img src={washer_logo} alt="washer logo"/>
              <p>{washers.length} machine(s) à laver</p>
            </div>
          )}
          {dryers && (
            <div>
              <img src={dryer_logo} alt="dryer logo"/>
              <p>{dryers.length} sèche linge(s)</p>
            </div>
          )}
        </div> 
      </div>
    </div>
  )
}

export default LaundryCard
