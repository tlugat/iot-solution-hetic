import {useAuth} from "app/hooks/useAuth";

import PageContainer from "app/commons/PageContainer/PageContainer";
import ContactAdmin from "app/commons/ContactAdmin/ContactAdmin";
import {PrimaryBtn} from "app/commons/Buttons/Buttons";
import LaundryCard from "app/commons/LaundryCard/LaundryCard";
import Module from "app/commons/Module/Module";

import about_logo from "app/assets/img/home-about.png";

import styles from './Home.module.scss';

function Home() {
 
  const auth = useAuth();
  const user = auth.getCurrentUser();
  console.log(user);
  return (
    <PageContainer>
      <h1 className={styles.title}>Bienvenue <span>{user.name}</span></h1>
      <LaundryCard/>
      <Module>
        <div className={styles.about}>
          <img src={about_logo} alt="washer with laundry basket and detergent" />
          <p>Laundry est une plateforme qui permet de réserver votre machine en temps réel en vous évitant de faire un nombre incalculable d’aller-retour vers votre laverie pour avoir enfin une machine disponible . Sur l’app, vous pouvez réserver votre machine mais aussi consulter toutes les machines de la laverie pour en voir l’état. Vous pouvez consulter la page profil de votre machine qui vous donnera la progression de cette dernière ainsi que les différentes informations sur votre tournée de linge. Grâce a Laundry  dépensez votre temps pour les bonnes choses ! </p>
        </div>
      </Module>
      <ContactAdmin/>
    </PageContainer>
  )
}

export default Home
