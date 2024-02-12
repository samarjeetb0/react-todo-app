import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TodoItemsFromContext } from "../store/todo-items-store";

export function TodoItem({ todoName, todoDate }) {
  const { deletTodoItem } = useContext(TodoItemsFromContext);

  const handleDeleteButton = () => {
    deletTodoItem(todoName);
  };

  return (
    <div className="container">
      <div className="row todo-item-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger todo-button"
            onClick={handleDeleteButton}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
