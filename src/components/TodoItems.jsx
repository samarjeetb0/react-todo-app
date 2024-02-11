import { TodoItem } from "./TodoItem";

export const TodoItems = ({ todoitems , deleteItem}) => {
  return (
    <div className="items-container">
      {todoitems.map((item) => (
        <TodoItem key={item.todoName} todoName={item.todoName} todoDate={item.todoDate}  deleteItem={deleteItem}/>
      ))}
    </div>
  );
};
