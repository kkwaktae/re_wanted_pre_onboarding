import styles from './Main.module.scss';
import Toggle from './toggle/Toggle';
import Tab from './tab/Tab';
import Slider from './slider/Slider';
import Input from './input/Input';
import Dropdown from './dropdown/Dropdown';

function Main() {
  return (
    <div className={styles.main}>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </div>
  );
}
export default Main;
