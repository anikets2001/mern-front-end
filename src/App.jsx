import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Service } from "./Pages/Service";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { Contact } from "./Pages/Contact";
import { Navbar } from "./Components/Navbar";
import { ErrorPage } from "./Pages/ErrorPage";
import { Footer } from "./Components/Footer";
import Logout from "./Pages/Logout";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
