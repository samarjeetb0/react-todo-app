import { useState } from "react";
import { BiMessageAdd } from 'react-icons/bi'

export function AddTodo({ getInputItem }) {
  const [todoName, setTodoName] = useState('');
  const [todoDate, setTodoDate] = useState('');

  const handleName = (event) => {
    setTodoName(event.target.value);
  };
  const handleDate = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddClicked = () => {
    getInputItem(todoName, todoDate);
    setTodoName('');
    setTodoDate('');
  }

  return (
    <div className="container text-center">
      <div className="row todo-item-row">
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            onChange={handleName}
            placeholder="Enter todo name"
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDate} />
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
