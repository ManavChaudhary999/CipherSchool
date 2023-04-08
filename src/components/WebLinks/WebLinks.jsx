import React from 'react';
import styles from './WebLinks.module.css';

import {Linkedin, GitHub, Facebook, Twitter, Instagram, Globe} from 'react-feather';

import DashboardBox from '../DashboardBox';

function Link({title, Icon}){
  return (
    <div className={styles.link}>
      <div className={styles.title}>{title}</div>
      <div className={styles.linkInput}>
        <span className={styles.icon}><Icon /></span>
        <input type="text" placeholder={title} disabled />
      </div>
    </div>
  );
}


function WebLinks() {
  return(
    <DashboardBox title="on the web">
      <div className={styles.linksContainer}>
        <Link title="LinkedIn" Icon={Linkedin} />
        <Link title="Github" Icon={GitHub} />
        <Link title="Facebook" Icon={Facebook} />
        <Link title="Twitter" Icon={Twitter} />
        <Link title="Instagram" Icon={Instagram} />
        <Link title="Website" Icon={Globe} />
      </div>
    </DashboardBox>
  );
}

export default WebLinks;
