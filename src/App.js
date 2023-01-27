import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const onChage = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("i run only once.");
  }, []);
  useEffect(() => {
    console.log("i run when keyword changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when counter changes.");
  }, [counter]);
  return (
    <div>
      <input onChange={onChage} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
