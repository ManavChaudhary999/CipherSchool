import React from 'react';
import styles from './Header.module.css';

import Logo from "../../assets/Logo";
import Logo2 from "../../assets/Logo2";
import Profile from "../../assets/Profile";
import {Search, Filter, Bell, Sun, Moon} from "react-feather";

function Header() {
  const [theme, setTheme] = React.useState('light');
  const transitionMode = theme === 'light' ? styles.thumbLeft : styles.thumbRight;

  function handleThemeSelect(){
    if(theme === 'light'){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }

  return(
    <header className={styles.navWrapper}>
      <div className={styles.navLeft}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt="logo" />
          <h1>CipherSchools</h1>
        </div>
      </div>

      <div className={styles.navRight}>
        <div className={styles.searchbarContainer}>
          <button><Search size={15} strokeWidth={1} /></button>
          <input type="text" placeholder="Search and Learn" />
          <button><Filter size={15} strokeWidth={1.5} /></button>
        </div>

        <div className={styles.notificationContainer}>
          <Bell size={15} />
          <span>0</span>
        </div>

        <div className={styles.avatarContainer}>
          <img src={Profile} alt="profile" />
        </div>

        <div className={styles.watchPointsContainer}>
          <img src={Logo2} alt="points" />
          <span>0</span>
        </div>

        <div className={styles.themeContainer} onClick={handleThemeSelect}>
          <div className={`${styles.thumb} ${transitionMode}`}></div>
          <div className={styles.themeLeft}><Sun size={18} /></div>
          <div className={styles.themeRight}><Moon size={18} /></div>
        </div>

      </div>
    </header>
  );
}

export default Header;
