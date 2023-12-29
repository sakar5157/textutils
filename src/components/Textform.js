import React, {useState} from 'react'



export default function Textform(props) {
    console.log(props);
    const handleUpClick=()=>{
       // console.log("upper case clicked");
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handlelowerClick=()=>{
        // console.log("upper case clicked");
         let newText=text.toLowerCase();
         setText(newText)
     }
    const handleOnChange=(event)=>{
       // console.log("on change");
        setText(event.target.value);
    }

    const[text,setText]=useState("");

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <div className="input-group">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey'}} id="mybox" rows="8"></textarea>
                </div>
                </div>
                <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>convert to uppercase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handlelowerClick}>convert to lowercase</button>
                </div>
                <div className='container my-3'>
                Text Summary
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length}Characters</p>
            </div>

        </>
  )
}
