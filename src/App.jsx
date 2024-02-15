
import React from "react";

import Applayout from "./Applayout";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Applayout />
      </BrowserRouter>
    </>
  );
}

export default App;

