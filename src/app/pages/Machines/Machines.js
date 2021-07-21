import { useState } from "react";
import { useAuth } from "app/hooks/useAuth";
import { useViewport } from "app/hooks/useViewport";

import styles from './Machines.module.scss'

import PageContainer from 'app/commons/PageContainer/PageContainer';
import MachinesList from "./components/MachinesList/MachinesList";

function Machines() {

  const [currentSelect, setCurrentSelect] = useState("washers");

  const { width, breakpoints: { l } } = useViewport();

  const auth = useAuth();
  const laundry = auth.getCurrentUser().laundry;

  const washers = laundry.laundry.filter(machine => machine.type === "washer");
  const dryers = laundry.laundry.filter(machine => machine.type === "dryer");

  const handleSelect = (e) => {
    if(e.target.value !== currentSelect) {
      setCurrentSelect(e.target.value);
    }
    return
  }

  return (
    <PageContainer>
      <h1 className={styles.title}>Laverie <span>{laundry.name}</span></h1>
      <div className={styles.container}>
        {
          width < l && (
            <>
              <select className={styles.select} onChange={handleSelect}>
                <option value="washers">Machine à laver</option>
                <option value="dryers">Sèche Linge</option>
              </select>
              
              <MachinesList 
              type={currentSelect} 
              machinesList={currentSelect === "washers" ? washers : dryers} 
              /> 

            </>   
          )
        }      
        
        {
          width >= l && (
            <>
              <MachinesList type="washers" machinesList={washers} />
              <MachinesList type="dryers" machinesList={dryers}/>
            </>
          )
        }
      </div>
    </PageContainer>
  )
}

export default Machines
