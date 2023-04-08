import React from 'react';
import styles from './Security.module.css';

import DashboardBox from '../DashboardBox';

function Security() {
  return(
    <DashboardBox title="Password & Security">
      <div className={styles.linksContainer}>
        <div className={styles.link}>
          <div className={styles.title}>Password</div>
          <div className={styles.linkInput}>
            {/* <span className={styles.icon}><Icon /></span> */}
            <input type="password" value={122343435} disabled />
          </div>
        </div>
      </div>
    </DashboardBox>
  );
}


export default Security;
