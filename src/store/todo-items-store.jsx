import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsFromContext = createContext({
  todoitems: [],
  addTodoItem: () => {},
  deletTodoItem: () => {},
});

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

/**
 * created this context proved which accepts other components as children which has dependency of items , addnewitem & deleteitem method
 * @param {*} param0 
 * @returns 
 */
export const TodoItemsContextProvider = ({ children }) => {
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
        todoName,
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
      {children}
    </TodoItemsFromContext.Provider>
  );
};
