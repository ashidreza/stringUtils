import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import About from "./components/About";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");

  /* ---------Alert into website----------- */
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    /* Object created to set alert : */
    setAlert({
      msg: message,
      type: type,
    });

    /* Auto dismissing the alert after some time : */

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };



  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.background =
        "linear-gradient(135deg, rgb(2, 219, 255) 30%, rgb(215, 219, 255), rgb(21, 152, 240) 60%)";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.background =
        "linear-gradient(135deg, rgb(80, 80, 80) 30%,rgb(50,50,50), rgb(20, 20, 20) 60%)";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="StringUtils" about='About Us' mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/contact" element={<Contact mode={mode} />} />
          <Route exact path="/" element={
            <TextForm
              heading="StringUtils - Word Counter, Character Counter, Remove Extra Space"
              summaryHead="Summery Of Your Text"
              mode={mode}
              showAlert={showAlert}
            />
          } />
        </Routes>
        <Footer creatername="Ashid Reza Suleman" />
      </Router>
    </>
  );
}

export default App;
