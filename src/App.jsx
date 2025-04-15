import React from "react";
import { Outlet } from "react-router";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
