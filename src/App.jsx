import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Headr from "./headr";
import Footer from "./footer";
import Login from "./login";
import Register from "./register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headr name="mu-react-store" />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;