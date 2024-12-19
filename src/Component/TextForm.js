import React,{useState} from 'react';


 export default function TextForm(props){
  const handleUpClick =()=>{
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to UpperCase", "success")
    
    
  }
  const handleLoClick =()=>{
    let newText = text.toLocaleLowerCase()
    setText(newText)
    props.showAlert("Converted to LowerCase","success");
    
  }
  
  const handleOnChange =(event)=>{
    // console.log("On Change");
    setText(event.target.value)
  }
    const [text, setText] = useState('');
    // text ="new text"; //Wrong way to change the state
    // setText ("new text"); //correct way to change the state

    return (
      <>
    <div id="container"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <label htmlFor="myBox" className="form-label"></label>
    <textarea className="form-control" value={text} style={{background:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
  
  </div>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
<h2>Your text summary</h2>
<p>{text.split(" ").length - 1} Words and {text.length} Character</p>
<p>{0.008 *text.split(" ").length} Minutes Read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
  </div>
  </>
    );
}



