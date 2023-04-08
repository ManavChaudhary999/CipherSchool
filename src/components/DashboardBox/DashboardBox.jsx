import React from 'react';
import styles from './DashboardBox.module.css';

function DashboardBox({title, isEditable=true, children}) {
  return(
    <div className={styles.wrapper}>
      <div className={styles.topRow}>
          <div className={styles.rowLeft}>{title}</div>
          {isEditable && <button className={styles.btnEdit}>Edit</button>}
      </div>
      {children}
    </div>
  );
}

export default DashboardBox;
