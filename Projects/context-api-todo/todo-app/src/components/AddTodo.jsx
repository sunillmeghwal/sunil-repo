import { useRef } from "react";
import { BiAddToQueue } from "react-icons/bi";
function AddTodo({ onNewItem }) {
  const todoNameElement = useRef(0);
  const dueDateElement = useRef(0);

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
  };

  return (
    <>
      <div className="container">
        <form className="row my-row" onSubmit={handleAddButtonClicked}>
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo Here"
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success my-button">
              <BiAddToQueue />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddTodo;
