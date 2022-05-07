import { useState } from 'react';
import styles from './Toggle.module.scss';

function Toggle() {
  const menuArr = ['기본', '상세'];
  const [move, setMove] = useState(false);
  const moveBasic = () => {
    setMove(false);
  };
  const moveDetail = () => {
    setMove(true);
  };

  return (
    <ul className={styles.toggleContainer}>
      <li
        role='presentation'
        className={styles.basic}
        onClick={moveBasic}
        style={{ color: !move ? '#131313' : '#aaaaaa' }}
      >
        {menuArr[0]}
      </li>
      <li
        role='presentation'
        className={styles.detail}
        onClick={moveDetail}
        style={{ color: move ? '#131313' : '#aaaaaa' }}
      >
        {menuArr[1]}
      </li>
      <span className={move ? `${styles.moveTool} ${styles.right}` : styles.moveTool} />
    </ul>
  );
}
export default Toggle;
