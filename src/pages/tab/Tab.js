import { useState } from 'react';
import styles from './Tab.module.scss';

function Tab() {
  const items = [
    { id: 1, name: '감자', engName: 'potato' },
    { id: 2, name: '고구마', engName: 'sweetPotate' },
    { id: 3, name: '카레라이스', engName: 'curry' },
  ];
  const [isSelected, setIsSelected] = useState(items[0].name);

  let sliderPosition;

  if (isSelected === items[0].name) {
    sliderPosition = { left: '0' };
  } else if (isSelected === items[1].name) {
    sliderPosition = { left: '33.333%' };
  } else {
    sliderPosition = { left: '66.666%' };
  }

  const tapItems = items.map((item, idx) => {
    const slideTab = () => {
      setIsSelected(items[idx].name);
    };

    return (
      <li
        role='presentation'
        key={`tab-item-${item.id}`}
        className={styles[item.engName]}
        onClick={slideTab}
        style={{ color: isSelected === item.name ? '#222222' : '#aaaaaa' }}
      >
        {item.name}
      </li>
    );
  });

  return (
    <ul className={styles.tabContainer}>
      {tapItems}
      <div className={styles.slider} style={sliderPosition} />
      <div className={styles.line} />
    </ul>
  );
}

export default Tab;
