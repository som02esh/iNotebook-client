import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login"
import Signup from "./components/Signup";
import { useState } from "react";
// import { type } from "@testing-library/user-event/dist/type";
function App() {
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },15000)
  }
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
          <Route path="/signup" element={<Signup showAlert={showAlert}/>}/>
            <Route path="/login" element={<Login showAlert={showAlert}/>}/>
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
