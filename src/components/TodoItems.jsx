import { TodoItemsFromContext } from "../store/todo-items-store";
import { useContext } from "react";
import { TodoItem } from "./TodoItem";

export const TodoItems = ({ deleteItem }) => {
  const todoitems = useContext(TodoItemsFromContext);
  return (
    <div className="items-container">
      {todoitems.map((item) => (
        <TodoItem
          key={item.todoName}
          todoName={item.todoName}
          todoDate={item.todoDate}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};
