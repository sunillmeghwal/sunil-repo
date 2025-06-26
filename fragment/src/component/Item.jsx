const Item = ({ foodItems }) => {
  return (
    <>
      <li className="list-group-item show-items"><span className="my-span">{foodItems}</span></li>
    </>
  );
};
export default Item;
