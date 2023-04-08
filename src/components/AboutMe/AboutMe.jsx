import React from 'react';
import styles from './AboutMe.module.css';

import DashboardBox from '../DashboardBox';

function AboutMe() {
  return(
    <DashboardBox title="About Me">
      <div className={styles.inputBox}>
        <textarea placeholder="Add something about you" rows="4" disabled></textarea>
      </div>
    </DashboardBox>
  );
}

export default AboutMe;
