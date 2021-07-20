import {useAuth} from "app/hooks/useAuth";

import styles from './Machines.module.scss'

import PageContainer from 'app/commons/PageContainer/PageContainer';
import MachineCard from "app/commons/MachineCard/MachineCard";

function Machines() {

  const auth = useAuth();
  const laundry = auth.getCurrentUser().laundry;

  const washers = laundry.laundry.filter(machine => machine.type === "washer");
  const dryers = laundry.laundry.filter(machine => machine.type === "dryer");

  return (
    <PageContainer>
      <h1 className={styles.title}>Laverie <span>{laundry.name}</span></h1>
      <div className={styles.container}>
        <div className={styles.machinesList}>
          <h2>Machines a laver</h2>
          { washers.map((washer, i) => <MachineCard key={i} machine={washer} />) }
        </div>
        <div className={styles.machinesList}>
          <h2>Seche Linges</h2>
          { dryers.map((dryer, i) => <MachineCard key={i} machine={dryer} />) }
        </div>
      </div>
    </PageContainer>
  )
}

export default Machines
