import styles from './Main.module.scss';
import Toggle from './toggle/Toggle';
import Tab from './tab/Tab';
import Input from './input/Input';

function Main() {
  return (
    <div className={styles.main}>
      <Toggle />
      <Tab />
      <Input />
    </div>
  );
}
export default Main;
