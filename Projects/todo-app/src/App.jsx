import TodoTitle from "./components/TodoTitle";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2024",
    },

    {
      name: "Goto College",
      dueDate: "4/10/2024",
    },

    {
      name: "Sunil Hatila",
      dueDate: "20/04/1991",
    },

    {
      name: "Yash",
      dueDate: "10/08/2019",
    },
  ];
  return (
    <center className="todo-container">
      <TodoTitle />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}
export default App;
