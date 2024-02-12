import { AddTodoUsingUseRef } from "./components/AddTodoUsingUseRef";
import { AppName } from "./components/AppName";
import "./App.css";
import { TodoItems } from "./components/TodoItems";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { TodoItemsContextProvider } from "./store/todo-items-store";
/**
 * Now this conponent is only responsible for showing UI, other business logics moved to the context provider
 * @returns 
 */
function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodoUsingUseRef />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
