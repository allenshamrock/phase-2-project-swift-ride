<<<<<<< HEAD
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
=======
import React from 'react'
import UserAuth from './components/UserAuth'

const App = () => {
  return (
    <div>
      <UserAuth/>
    </div>
  )
}

export default App
>>>>>>> dec1867 ( {Feat}:Implemented the user Auth)
