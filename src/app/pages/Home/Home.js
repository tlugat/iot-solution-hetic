import {useAuth} from "app/hooks/useAuth";

import PageContainer from "app/commons/PageContainer/PageContainer";
import ContactAdmin from "app/commons/ContactAdmin/ContactAdmin";
import {PrimaryBtn} from "app/commons/Buttons/Buttons";

import about_logo from "app/assets/img/home-about.png";

import styles from './Home.module.scss';

function Home() {
 
  const auth = useAuth();
  
  return (
    <PageContainer>
      <h1 className={styles.title}>Bienvenue <span>{auth.user.name}</span></h1>
      <div className={styles.about}>
        <img src={about_logo} alt="washer with laundry basket and detergent" />
        <p>Laundry est une plateforme qui permet de réserver votre machine en temps réel en vous évitant de faire un nombre incalculable d’aller-retour vers votre laverie pour avoir enfin une machine disponible . Sur l’app, vous pouvez réserver votre machine mais aussi consulter toutes les machines de la laverie pour en voir l’état. Vous pouvez consulter la page profil de votre machine qui vous donnera la progression de cette dernière ainsi que les différentes informations sur votre tournée de linge. Grâce a Laundry  dépensez votre temps pour les bonnes choses ! </p>
      </div>
      <PrimaryBtn arrow value="Se deconnecter" method={auth.logout}>Se deconnecter</PrimaryBtn>
      <ContactAdmin/>
    </PageContainer>
  )
}

export default Home
