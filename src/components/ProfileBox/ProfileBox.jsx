import React from 'react';
import styles from './ProfileBox.module.css';

import {Edit} from 'react-feather';

import Profile from '../../assets/Profile';

function ProfileBox() {
  return(
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.userAvatar}>
          <img src={Profile} alt="profile-logo" />
          <button><Edit /></button>
        </div>

        <div className={styles.userDetails}>
          <div className={styles.left}>
            <h2 className={styles.greeting}>Hello</h2>
            <h1 className={styles.username}>Manav Chaudhary</h1>
            <h2 className={styles.email}>999macboy@gmail.com</h2>
          </div>
          <div className={styles.right}>
            <button className={styles.followers}>
              <span>0</span>{" "}
              Followers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;
