import { Outlet } from "react-router";
import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <h1>Navbar</h1>
      <Outlet></Outlet>
      <h1>Footer</h1>
    </>
  );
}

export default App;
