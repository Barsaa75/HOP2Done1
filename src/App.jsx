import "./App.css";
import Header from "./Pages/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Pages/Product";
import Contact from "./Pages/Contact";
import Login from "./Pages/LogIn";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
//DarkMode
import { useState, createContext } from "react";

export const darkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <darkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </darkModeContext.Provider>
  );
}

export default App;
