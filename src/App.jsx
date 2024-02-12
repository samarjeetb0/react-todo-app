import { AddTodoUsingUseRef } from "./components/AddTodoUsingUseRef";
import { AppName } from "./components/AppName";
import "./App.css";
import { TodoItems } from "./components/TodoItems";
import { useState } from "react";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { TodoItemsFromContext } from "./store/todo-items-store";

function App() {
  const [itemList, setItemList] = useState([]);
  /**
   * By default react always works in async way ,
   * to always get the update current value we are
   * passing data inside the setTimesList method by using callback
   *
   * also call as functional updates to avoid stale values during async updates
   */
  const addTodoItem = (todoName, todoDate) => {
    setItemList((currValue) => [
      ...currValue,
      {
        todoName: todoName,
        todoDate: todoDate,
      },
    ]);
  };

  const deletTodoItem = (todoName) => {
    let newList = itemList.filter((item) => item.todoName !== todoName);
    setItemList(newList);
  };

  return (
    //value should be pass as an bject in the context provider so that later can be modified according to our need
    // <TodoItemsFromContext.Provider
    //   value={{
    //     todoitems: itemList,
    //     addTodoItem: addTodoItem,
    //     deletTodoItem: deletTodoItem,
    //   }}
    // >
    //same can be written as below

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
