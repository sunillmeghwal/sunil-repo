import TodoTitle from "./components/TodoTitle";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2024",
  //   },

  //   {
  //     name: "Goto College",
  //     dueDate: "4/10/2024",
  //   },

  //   {
  //     name: "Sunil Hatila",
  //     dueDate: "20/04/1991",
  //   },

  //   {
  //     name: "Yash",
  //     dueDate: "10/08/2019",
  //   },
  // ];

  // const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [todoItems, setTodoItems] = useState([]);

  // const handleNewItem = (itemName, itemDueDate) => {
  //   // console.log(`New Item Added:${itemName} Date:${itemDueDate}`);
  //   const newTodoItems = [
  //     ...todoItems,
  //     { name: itemName, dueDate: itemDueDate },
  //   ];
  //   setTodoItems(newTodoItems);
  // };

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added:${itemName} Date:${itemDueDate}`);

    //   setTodoItems((currentValue) => {
    //     const newTodoItems = [
    //       ...todoItems,
    //       { name: itemName, dueDate: itemDueDate },
    //     ];
    //     return newTodoItems;
    //   });
    // };



    //OR//

    setTodoItems((currentValue) => [
      ...currentValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item Deleted:${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <TodoTitle />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}
export default App;
