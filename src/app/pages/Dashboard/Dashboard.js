import {useAuth} from "app/hooks/useAuth";

import styles from './Dashboard.module.scss'

import PageContainer from 'app/commons/PageContainer/PageContainer';
import Module from "app/commons/Module/Module";
import ContactAdmin from "app/commons/ContactAdmin/ContactAdmin";
import UserReservations from "app/commons/UserReservations/UserReservations";
import AdminDashboard from "app/commons/AdminDashboard/AdminDashboard";

import placeholder_avatar from "app/assets/img/dashboard/profile/placeholder-profile.png";

function Dashboard() {

  const auth = useAuth();
  const user = auth.getCurrentUser();

  return (
    <PageContainer>
      <div className={styles.container}>
        <Module>
          <div className={styles.profile}>
            <div className={styles.profile__avatar}>
              <img src={placeholder_avatar} alt="profile"/>
            </div>
            <div className={styles.info}>
              <h1>{`${user.name} ${user.lastName}`}</h1>
              <div className={styles.info__contact}>
                <p>Statut : <span>{user.role === user ? "Étudiant(e)" : "Administrateur" }</span> </p>
                <p>Résidence : <span> {user.laundry.name}</span></p>
                <p>Adresse mail : <span> {user.email}</span></p>
              </div>
            </div>
          </div>
        </Module>
        { user.role === "user" ? <UserReservations/> : (
          <AdminDashboard/>
        )}
        <ContactAdmin/>
      </div>
    </PageContainer>
  )
}

export default Dashboard
