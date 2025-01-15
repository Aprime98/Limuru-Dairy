import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Feedmill, Products } from "./Pages";
import "./App.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/feedmill' element={<Feedmill />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
