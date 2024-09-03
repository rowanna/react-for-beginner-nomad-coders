import Button from "./Button";
import styles from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1)

  return (
    <div>
      <h1 className={styles.title}>Welcome Back!</h1>
      <button onClick={onClick}>click me</button>
      {counter}
    </div>
  );
}

export default App;
