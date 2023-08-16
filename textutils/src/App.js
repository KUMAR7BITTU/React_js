//  import { useState } from 'react';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useSyncExternalStore } from "react";

function App() {
  const [mode,setMode] = useState('light');// This is my state variable which tells me whether dark mode is enabled or not .
  
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode}/>
      {/* <Navbar/> */}
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below"/> 
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
