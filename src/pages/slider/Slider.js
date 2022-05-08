import styles from './Slider.module.scss';

function Slider() {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.statsViewer}>
        <p className={styles.figure}>50</p>
        <span className={styles.percent}>%</span>
      </div>
      <ul className={styles.slider} />
      <ul className={styles.percentBtn} />
    </div>
  );
}

export default Slider;
