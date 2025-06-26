import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={items} foodItems={item} />

        
      ))}
    </ul>
  );
};
export default FoodItems;
