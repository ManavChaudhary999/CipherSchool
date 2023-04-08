import React from 'react';
import styles from './ProfileDashboard.module.css';

import Underliner from "../Underliner";
import AboutMe from '../AboutMe';
import WebLinks from '../WebLinks';
import ProfessionalInfo from '../ProfessionalInfo';
import Security from '../Security';
import Interests from '../Interests';

function ProfileDashboard() {
  return(
    <div className={styles.wrapper}>
      <AboutMe />
      <Underliner />
      <WebLinks />
      <Underliner />
      <ProfessionalInfo />
      <Underliner />
      <Security />
    </div>
  );
}

export default ProfileDashboard;
