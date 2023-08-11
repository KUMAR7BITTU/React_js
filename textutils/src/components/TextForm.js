import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
    //console.log("On change");
    setText(event.target.value);
  }
  const [text,setText] = useState('Enter text here2');
  // text = "new text"; // Wrong way to change the text
  // setText("new text"); //correct way to change the text
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>3432 words and 454934594 characters</p>
    </div>
    </>
  );
}
