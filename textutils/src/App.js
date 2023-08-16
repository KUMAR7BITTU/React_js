//  import { useState } from 'react';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useSyncExternalStore } from "react";

function App() {
  const [mode,setMode] = useState('light');// This is my state variable which tells me whether dark mode is enabled or not .
  
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode}/> 
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
