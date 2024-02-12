import { useContext, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsFromContext } from "../store/todo-items-store";

export function AddTodoUsingUseRef() {
  const { addTodoItem } = useContext(TodoItemsFromContext);

  const todoName = useRef();
  const todoDate = useRef();

  const handleAddClicked = () => {
    addTodoItem(todoName.current.value, todoDate.current.value);
    todoName.current.value = "";
    todoDate.current.value = "";
  };

  return (
    <div className="container text-center">
      <div className="row todo-item-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoName}
            placeholder="Enter todo name from usig useref"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            onClick={handleAddClicked}
            className="btn btn-success todo-button"
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
