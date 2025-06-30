import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {

  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
