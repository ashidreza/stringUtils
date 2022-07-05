import React, { useState } from 'react'

export default function
    TextForm(props) {
    const handleUpClick = () => {
        if (text !== '') {
            let newText = text.toUpperCase();
            setText(newText);
        } else {
            props.showAlert("No Text to Convert", "warning");
        }
    }
    const handleLowClick = () => {
        if (text !== '') {
            let newText = text.toLowerCase();
            setText(newText);
        } else {
            props.showAlert("No Text to Convert", "warning");
        }
    }
    const handleClearClick = () => {
        setText('');
        props.showAlert("Cleared the whole text", "danger");
    }

    const handleExtraspaces = () => {
        if (text !== '') {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("All extra spaces are cleared", "success");
        }
        else {
            props.showAlert("There's Nothing Remove Spaces Into TextBox", "warning");
        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("")

    let styledark = {
        color: '#fff',
        backgroundColor: '#3A3B3C',
        fontWeight: '400',
        fontSize: '20px'
    }

    let stylelight = {
        color: '#000',
        backgroundColor: '#fff',
        fontWeight: '400',
        fontSize: '18px'
    }

    let style2dark = {
        color: '#fff'
    }

    let style2light = {
        color: '#000'
    }

    return (
        <div className="main">

            <div className="container my-5">

                <h1 className="text-center" style={props.mode === 'dark' ? style2dark : style2light}>{props.heading}</h1>

                <div className="mb-3 my-3">
                    <label htmlFor="text" className="form-label">
                        <b className="keebo" style={props.mode === 'dark' ? style2dark : style2light}>Enter Your Text Here:</b>
                    </label>
                    <textarea
                        className="form-control"
                        id="text"
                        rows="7"
                        style={props.mode === 'dark' ? styledark : stylelight}
                        value={text}
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>To_UpperCase</button>

                <button disabled={text.length === 0} className="mx-2 btn btn-primary" onClick={handleLowClick}>To_LowerCase</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraspaces}>Remove Extra Spaces</button>

                <button disabled={text.length === 0} className="mx-2 btn btn-primary" onClick={handleClearClick}>Clear Text</button>

            </div>
            <div className="container my-3">
                <h1>Your text Summary</h1>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words</p>
                <p>{text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} seconds to read this paragraph</p>
            </div>
        </div>
    )
}
