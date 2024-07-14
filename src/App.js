import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Example from "./components/Unmount/Example";
import Parent from "./components/interview/Parent";

const Page = (props) => {
  return (
    <Link to={props.name === "Home" ? "/About" : "/"} about="ddf">
      <h1>{props.name} PAGE</h1>
    </Link>
  );
};
const App = () => {
  return (
    <>
      <Parent />
    </>
  );
};

export default App;
// 1.get the data from below url
// https://jsonplaceholder.typicode.com/users
// 2. Display a table with basic data from this api
// 3. Add a input to Search name and apply debouncing here.
// 4. Add a reset button which will reset the data in table to initial data.
// 5. Add delete option in each row which should delete respective row when clicked
