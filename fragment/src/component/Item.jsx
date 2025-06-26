import styles from "./Item.module.css";

const Item = ({ foodItems }) => {
  return (
    <li className={`${styles["show-items"]}`}>
      <span className={styles["my-span"]}>{foodItems}</span>
    </li>
  );
};
export default Item;
