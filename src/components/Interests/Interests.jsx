import React from 'react';
import styles from './Interests.module.css';

import DashboardBox from '../DashboardBox';

function Interests() {
  return(
    <DashboardBox title="Interests">
      <div className={styles.wrapper}>
        <div className={styles.interest}>
          <span>Data Structures</span>
        </div>
        <div className={styles.interest}>
          <span>Data Science</span>
        </div>
      </div>
    </DashboardBox>
  );
}

export default Interests;
