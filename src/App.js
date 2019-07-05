import React, { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./useFetch";
import { useForm } from "./useForm";

const App = () => {
  // const [count, setCount] = useState(10);
  // const [count2, setCount2] = useState(10);
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  // http://numbersapi.com/73/trivia

  // const [showHello, setShowHello] = useState(true);

  // useEffect is new way to use lifecycle hooks
  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  // can have multiple -- they will fire in order top-->bottom
  // useEffect(() => {
  //   console.log("mount1");
  // });

  // useEffect(() => {
  //   console.log("mount2");
  // });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div className="App">
      <div>{!data ? "Loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      {/* <button
        onClick={() => {
          setCount(c => c + 1);
          setCount2(c => c + 2);
        }}
      >
        +
      </button>
      <div>Count 1: {count}</div>
      <div>Count 2: {count2}</div> */}
      {/* <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      {showHello && <Hello />} */}
      <input
        name="email"
        placeholder="email"
        type="text"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="firstName"
        placeholder="First Name"
        type="text"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
