// import { useState } from 'react';
import styles from './Slider.module.scss';
import { PERCENT_DATA } from './data/data';

function Slider() {
  // const [distance, setDistance] = useState(0);
  const BAR_DISTANCE = 300;
  console.log(BAR_DISTANCE * 0, BAR_DISTANCE * 0.25, BAR_DISTANCE * 0.5, BAR_DISTANCE * 0.75, BAR_DISTANCE * 1);

  const points = [...PERCENT_DATA].map((percent) => {
    return <li key={`point-number-${percent.id}`} className={styles.point} />;
  });
  const buttons = [...PERCENT_DATA].map((percent) => {
    return (
      <button key={`percentage-btn-number-${percent.id}`} type='button' className={styles.btn}>
        {percent.percentage}%
      </button>
    );
  });

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.statsViewer}>
        <p className={styles.figure}>1</p>
        <span className={styles.percent}>%</span>
      </div>

      <ul className={styles.slider}>
        {points}
        <li className={styles.currentBar} />
        <li className={styles.basedBar} />
      </ul>

      <div className={styles.percentBtn}>{buttons}</div>
    </div>
  );
}

export default Slider;
