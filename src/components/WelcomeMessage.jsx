import styles from "./WelcomeMessage.module.css";
export const WelcomeMessage = ({ todoitems }) => {
  return (
    todoitems.length === 0 && (
      <p className={styles.welcome}>Enjoy your day !!!</p>
    )
  );
};
