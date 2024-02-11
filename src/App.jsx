import { AddTodo } from "./components/AddTodo";
import { AddTodoUsingUseRef } from "./components/AddTodoUsingUseRef";
import { AppName } from "./components/AppName";
// import { TodoItem1 } from "./components/TodoItem1";
// import { TodoItem } from "./components/TodoItem";
// import { TodoItem2 } from "./components/TodoItem2";
import "./App.css";
import { TodoItems } from "./components/TodoItems";
import { useState } from "react";
import { WelcomeMessage } from "./components/WelcomeMessage";

function App() {
  let todoName = "todo name";
  let todoDate = "todo date";

  // const itemList = [
  // {
  //   todoName: "buy milk",
  //   todoDate: "1/1/2024",
  // },
  //   {
  //     todoName: "go to college",
  //     todoDate: "1/1/2024",
  //   },
  //   {
  //     todoName: "traking",
  //     todoDate: "1/1/2024",
  //   },
  // ];

  const [itemList, setItemList] = useState([]);

  // const handleInputItem = (todoName, todoDate) => {
  //   let newItem = {
  //     todoName: todoName,
  //     todoDate: todoDate,
  //   };
  //   const newItemList = [...itemList, newItem];
  //   setItemList(newItemList);
  // };

  /**
   * By default react always works in async way , 
   * to always get the update current value we are 
   * passing data inside the setTimesList method by using callback
   * 
   * also call as functional updates to avoid stale values during async updates
   * @param {*} todoName
   * @param {*} todoDate
   */
  const handleInputItem = (todoName, todoDate) => {
    // let newItem = {
    //   todoName: todoName,
    //   todoDate: todoDate,
    // };
    // const newItemList = [...itemList, newItem];
    setItemList((currValue) => [
      ...currValue,
      {
        todoName: todoName,
        todoDate: todoDate,
      },
    ]);
  };

  const handleDeleteItem = (todoName) => {
    let newList = itemList.filter((item) => item.todoName !== todoName);
    setItemList(newList);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodoUsingUseRef getInputItem={handleInputItem} />
        <AddTodo getInputItem={handleInputItem} />
        <WelcomeMessage todoitems={itemList} />
        <TodoItems todoitems={itemList} deleteItem={handleDeleteItem} />
        {/* <TodoItem todoName={todoName} todoDate={todoDate} />
          <TodoItem todoName={todoName} todoDate={todoDate} /> */}
        {/* <TodoItem1 />
          <TodoItem2 /> */}
      </center>
    </>
  );
}

export default App;
