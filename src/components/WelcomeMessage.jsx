import { TodoItemsFromContext } from "../store/todo-items-store";
import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";

export const WelcomeMessage = () => {
  const { todoitems } = useContext(TodoItemsFromContext);
  return (
    todoitems.length === 0 && (
      <p className={styles.welcome}>Enjoy your day !!!</p>
    )
  );
};
