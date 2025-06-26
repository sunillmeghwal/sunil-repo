import TodoTitle from "./components/TodoTitle";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <TodoTitle />
      <div className="items-container">
      <AddTodo />
      <TodoItems />
      </div>
    </center>
  );
}
export default App;
