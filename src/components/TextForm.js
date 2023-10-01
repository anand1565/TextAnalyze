import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value)
    }

    function handleClick() {
        setText(prevVal => prevVal.toUpperCase())
        props.ShowAlert("Text has been successfully converted to upper case", "success");
    }
    function handleOnClick() {
        setText(prevVal => prevVal.toLowerCase())
        props.ShowAlert("Text has been successfully converted to lower case", "success");
    }
    function handleOnClear() {
        setText('')
        props.ShowAlert("Text has been successfully cleared", "success");
    }

    function Copy(){
        const txt =  document.getElementById('myText');
        txt.select();
        txt.setSelectionRange(0,9999);
        navigator.clipboard.writeText(txt.value);
        props.ShowAlert("Text copied successfully","success");

    }

    return (
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
            <h1 className='my-3' >Enter some text to analyze</h1>
            <div className="mb-3 mt-4">
                <h1>{props.heading}</h1>
                {/* <label htmlFor="myText" className="form-label">Example textarea</label> */}
                <textarea value={text} onChange={handleChange} className="form-control bg-light text-dark" id="myText" rows="10" style={{ backgroundColor: props.mode === 'dark' ? '#102237' : 'white', color: props.mode === 'dark' ? 'light' : 'black' }}></textarea>
                {/* <textarea className="form-control mt-3" id="myText" rows="10" placeholder='dislabled' disabled></textarea> */}
            </div>
            <div className="container">
                <button type='submit' onClick={handleClick} className='btn btn-primary btn-md my-2' >Convert to UpperCase</button>
                <button type='submit' onClick={handleOnClick} className='btn btn-primary my-2 mx-2' >Convert to LowerCase</button>
                <button type='submit' onClick={handleOnClear} className='btn btn-primary my-2' >Clear</button>
                <button type='submit' onClick={Copy} className='btn btn-primary my-2 mx-2' >Copy</button>

            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Text summary</h1>
                <p><b>{text.split(" ").length} words {text.length} characters</b></p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter some text in the textbox for preview"}</p>
            </div>
        </div>
    )
}
