import { BiAddToQueue } from "react-icons/bi";
import { useContext } from "react";
import { useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handlDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <>
      <div className="container">
        <div className="row my-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" value={dueDate} onChange={handlDateChange} />
          </div>
          <div className="col-2">
            <button
              type="submit"
              className="btn btn-success my-button"
              onClick={handleAddButtonClicked}
            >
              <BiAddToQueue />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
