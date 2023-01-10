import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase", "success")
  };
  const handleloClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase", "success")
  };
  const handleclearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = " "
    setText(newText);
    props.showAlert("Clear the Text", "success")
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
    
  };
  const handleCopy = ()=>{
   
    navigator.clipboard.writeText(text);
    
    props.showAlert("Copy the text ",'success')
  };
  const handleReSpaces = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.split(/[ ]+/);

    setText(newText.join(" "));
    props.showAlert("Remove all spaces",'success')
  };
  
  const [text, setText] = useState("");
  // setText("Enter Text Here");
  return (
    <>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className="mb-4 my-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white', color:props.mode==='dark'?'white':'black'}}
          ></textarea>
          <button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleUpClick}>
            Conver to Uppercase
          </button>
          <button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleloClick}>
            Conver to Lowercase
          </button>
          <button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleclearClick}>
            Clear text
          </button>
          <button  className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
          <button  className="btn btn-primary mx-1 my-2" disabled={text.length===0}   onClick={handleReSpaces}>Remove Extra Spaces</button>
        </div>
      </div>
      <div className="container my-3 "  style={{color: props.mode==='dark'?'white':'black'}} >
        <h1> Your Text Summary</h1>
        <p>
          <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> Words and <b>{text.length}</b> Charactor
        </p>
        <p> <b>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </b> Minutes to read this</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter your preview here'}</p>
      </div>
    </>
  );
}
