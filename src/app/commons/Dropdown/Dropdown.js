import { useDetectOutsideClick } from "app/hooks/useDetectOutsideClick";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "app/hooks/useAuth";

import { TextBtn } from "app/commons/Buttons/Buttons";

import arrow_logo from "app/assets/img/arrow-down-profile.svg";
import styles  from './Dropdown.module.scss';
import placeholder_avatar from "app/assets/img/dashboard/profile/placeholder-profile.png";

function Dropdown() {

  const auth = useAuth();
  const user = auth.getCurrentUser();

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  return (
    <div className={styles.menuContainer}>
    <div onClick={() => setIsActive(!isActive)} className={styles.menuTrigger}>
      <img
        src={placeholder_avatar}
        alt="User avatar"
      />
      <span>{user.name}</span>
      <img src={arrow_logo} alt="down arrow"/>
    </div>
    <nav
      ref={dropdownRef}
      className={`${styles.menu} ${isActive ? styles.active : styles.inactive}`}
    >
      <ul>
        <li>
          <NavLink exact to="/profile">Gerer mon profil</NavLink>
        </li>
        <li>
          <TextBtn customStyles={{color: "#FF7E7E" }} method={auth.logout} value="Deconnexion"/>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Dropdown
