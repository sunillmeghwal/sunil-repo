import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";

function App() {
  // let foodItems = [];
  let foodItems = [
    "Dal",
    "Green Vegetable",
    "Roti",
    "Milk",
    "Ghee",
    "salad",
    "Curd",
    "Sbji"
  ];

  return (
    <>
      <h1> Healthy Foods </h1>
      <ErrorMessage items={foodItems} />
       <FoodItems  items={foodItems}/>
    </>
  );
}

export default App;
