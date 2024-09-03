import Button from "./Button";
import styles from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setCounter((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value)

  useEffect(() => {
    console.log('한 번만 실행됨.')
  }, [])
  useEffect(() => {
    console.log('keyword state가 변경될 때만 실행됨.', keyword)
  }, [keyword])
  useEffect(() => {
    console.log('counter state가 변경될 때만 실행됨.', counter)
  }, [counter])
  useEffect(() => {
    console.log('keyword, counter state가 변경될 때만 실행됨.')
  }, [keyword, counter])
  return (
    <div>
      <h1 className={styles.title}>Welcome Back!</h1>
      <input value={keyword} onChange={onChange}></input>
      <button onClick={onClick}>click me</button>
      {counter}
    </div>
  );
}

export default App;
