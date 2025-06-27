import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";

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
    "Sbji",
  ];

  return (
    <>
      <Container>
        <h1 className="food-heading"> Healthy Foods </h1>
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
