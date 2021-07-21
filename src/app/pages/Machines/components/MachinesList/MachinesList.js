import styles from "./MachinesList.module.scss";

import MachineCard from "app/commons/MachineCard/MachineCard";

function MachinesList({machinesList, type}) {

  return (
    <div className={styles.container}>
      <h2>{type === "washers" ? "Machines a laver" : 'Seche linges'}</h2>
      { machinesList.map((machine, i) => <MachineCard key={i} machine={machine} />) }
    </div>
  )
}

export default MachinesList
