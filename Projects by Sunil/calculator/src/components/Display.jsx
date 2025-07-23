import styles from "./Display.module.css";
const Dispaly = ({ displayValue }) => {
  return (
    <input
      type="text"
      className={styles.display}
      value={displayValue}
      readOnly
    />
  );
};
export default Dispaly;
