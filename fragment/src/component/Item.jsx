import styles from "./Item.module.css";

const Item = ({ foodItems, bought, handleBuyButton }) => {
  const handleBuyButtonClick = (event) => {
    console.log(event);
    console.log(`${foodItems} being bought`);
  };

  return (
    <li
      className={`${styles["show-items"]} list-group-item ${
        bought && "active"
      }`}
    >
      <span className={styles["my-span"]}>{foodItems}</span>

      {/* <button
        className={`${styles.button} btn btn-info`}
        onClick={() => console.log(`${foodItems} being bought`)}
      >
        Buy
      </button> */}

      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
