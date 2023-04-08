import React from 'react';
import styles from './ProfessionalInfo.module.css';

import DashboardBox from '../DashboardBox';

const educationOptions = [
  {id: 1, value: 'Primary'},
  {id: 2, value: 'Secondary'},
  {id: 3, value: 'Higher Secondary'},
  {id: 4, value: 'Graduation'},
  {id: 5, value: 'Post Graduation'},
];

const professionOptions = [
  {id: 1, value: 'Schooling'},
  {id: 2, value: 'College Student'},
  {id: 3, value: 'Teaching'},
  {id: 4, value: 'Job'},
  {id: 5, value: 'Freelancing'},
];

function ProfessionalInfo() {
  const [isSelectedEdu, setIsSelectedEdu] = React.useState(false);
  const [isSelectedProf, setIsSelectedProf] = React.useState(false);
  const [educationValue, setEducationValue] = React.useState(educationOptions[0].value)
  const [professionValue, setProfessionValue] = React.useState(professionOptions[0].value)

  function handleSelectEducation(idx) {
    setIsSelectedEdu(false);
    setEducationValue(educationOptions[idx].value);
  }
  function handleSelectProfession(idx) {
    setIsSelectedProf(false);
    setProfessionValue(professionOptions[idx].value);
  }

  return(
    <DashboardBox title="Professional Information">
      <div className={styles.linksContainer}>
        <div className={styles.link}>
          <div className={styles.title}>Highest Education</div>
          <div className={styles.linkInput}>
            <div className={styles.input} onClick={()=> setIsSelectedEdu(true)}>{educationValue}</div>
          </div>
          <div className={styles.options} style={{display: isSelectedEdu? 'grid' : 'none'}}>
          {
            educationOptions?.map(({id, value}) => (
              <div key={id} className={`${styles.option} ${educationValue === value && styles.select}`} onClick={()=> handleSelectEducation(id-1)}>{value}</div>
            ))
          }
          </div>
        </div>

        <div className={styles.link}>
          <div className={styles.title}>What do yo do currently?</div>
          <div className={styles.linkInput}>
            {/* <span className={styles.icon}></span> */}
            <div className={styles.input} onClick={()=> setIsSelectedProf(true)}>{professionValue}</div>
          </div>
          <div className={styles.options} style={{display: isSelectedProf ? 'grid' : 'none'}}>
          {
            professionOptions?.map(({id, value}) => (
              <div key={id} className={`${styles.option} ${professionValue === value && styles.select}`} onClick={()=> handleSelectProfession(id-1)}>{value}</div>
            ))
          }
          </div>
        </div>

      </div>
    </DashboardBox>
  );
}

export default ProfessionalInfo;
