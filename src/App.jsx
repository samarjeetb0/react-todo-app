import { AddTodoUsingUseRef } from "./components/AddTodoUsingUseRef";
import { AppName } from "./components/AppName";
import "./App.css";
import { TodoItems } from "./components/TodoItems";
import { useReducer } from "react";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { TodoItemsFromContext } from "./store/todo-items-store";

const todoItemsReducer = (currentItems, action) => {
  let newItemsList;
  if (action.type === "NEW_ITEM") {
    newItemsList = [
      ...currentItems,
      {
        todoName: action.payload.todoName,
        todoDate: action.payload.todoDate,
      },
    ];
  }
  if (action.type === "DELETE_ITEM") {
    newItemsList = currentItems.filter(
      (item) => item.todoName !== action.payload.todoName
    );
  }
  return newItemsList;
};

function App() {
  const [itemList, dipatchTodoItemActions] = useReducer(todoItemsReducer, []);

  const addTodoItem = (todoName, todoDate) => {
    const actionObject = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        todoDate,
      },
    };
    dipatchTodoItemActions(actionObject);
  };

  const deletTodoItem = (todoName) => {
    const actionObject = {
      type: "DELETE_ITEM",
      payload: {
        todoName
      },
    };
    dipatchTodoItemActions(actionObject);
  };

  return (
    <TodoItemsFromContext.Provider
      value={{
        todoitems: itemList,
        addTodoItem,
        deletTodoItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodoUsingUseRef />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsFromContext.Provider>
  );
}

export default App;
