import { createContext } from "react";


export const TodoItemsFromContext = createContext({
    todoitems: [],
    addTodoItem: () => {},
    deletTodoItem: () => {}
});