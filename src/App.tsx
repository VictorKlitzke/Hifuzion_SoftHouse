import './App.css';

import  React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

/* Components */
import Header from "./components/Header";

/* Pages */
import Home from "./views/home/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
