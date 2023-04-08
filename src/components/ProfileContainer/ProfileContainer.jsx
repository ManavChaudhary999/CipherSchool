import React from 'react';
import styles from './ProfileContainer.module.css';

import ProfileBox from '../ProfileBox';
import ProfileDashboard from '../ProfileDashboard';

function ProfileContainer() {
  return(
    <div className={styles.wrapper}>
      <ProfileBox />
      <ProfileDashboard />
    </div>
  );
}

export default ProfileContainer;
