import styles from "./Item.module.css";

const Item = ({ foodItems }) => {
  return (
    <li className={`${styles["show-items"]} list-group-item`}>
      <span className={styles["my-span"]}>{foodItems}</span>
    </li>
  );
};
export default Item;
