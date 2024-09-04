import { useEffect, useState } from "react";
import StyledComponentExample from "./StyledComponentExample"

function Hello() {
  useEffect(()=> {
    console.log('created!!!!!!')
    return () => console.log("destroyed :(@@@@@@@@") // useEffect의 cleanUp.
  }, [])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)

  return (
    <div>
      <StyledComponentExample />
      {showing? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
