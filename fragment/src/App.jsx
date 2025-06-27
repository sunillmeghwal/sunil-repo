import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  // let textToShow = "Food Item Entered by User";

  let [foodItems, setFoodItems] = useState([
    // "Salad",
    // "Green Vegetable",
    // "Roti",
  ]);

  // let foodItems = [
  //   "Dal",
  //   "Green Vegetable",
  //   "Roti",
  //   "Milk",
  //   "Ghee",
  //   "salad",
  //   "Curd",
  //   "Sbji",
  // ];

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";

      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value enered is " + newFoodItem);
    }
    // console.log(event);
    // setTextToShow(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading"> Healthy Foods </h1>

        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />

        <FoodItems items={foodItems} />
      </Container>

      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container>
    </>
  );
}

export default App;
