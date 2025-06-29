import { useRef } from "react";
import { BiAddToQueue } from "react-icons/bi";
function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef(0);
  const dueDateElement = useRef(0);

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handlDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`noOfUpdates are:${noOfUpdates.current}`);
  // };

  // const handleAddButtonClicked = () => {
  //   onNewItem(todoName, dueDate);
  //   setDueDate("");
  //   setTodoName("");
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    // console.log(`${todoName} due on:${dueDate}`);
    onNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <>
      <div className="container">
        {/* <div className="row my-row"> */}
        <form className="row my-row" onSubmit={handleAddButtonClicked}>
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo Here"
              // value={todoName}
              // onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              ref={dueDateElement}
              // value={dueDate}
              // onChange={handlDateChange}
            />
          </div>
          <div className="col-2">
            <button
              type="submit"
              className="btn btn-success my-button"
              // onClick={handleAddButtonClicked}
            >
              <BiAddToQueue />
            </button>
          </div>
          {/* </div> */}
        </form>
      </div>
    </>
  );
}
export default AddTodo;
