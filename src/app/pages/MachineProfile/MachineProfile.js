import {useAuth} from "app/hooks/useAuth";
import {useParams} from "react-router-dom";

import styles from './MachineProfile.module.scss';

import PageContainer from "app/commons/PageContainer/PageContainer";

function MachineProfile() {

  const auth = useAuth();
  const laundry = auth.getCurrentUser().laundry.laundry;

  let { id } = useParams();
  
  const machine = laundry.find(el => el.id === Number(id));

  return (
    <PageContainer>
      {machine.name}
    </PageContainer>
  )
}

export default MachineProfile
