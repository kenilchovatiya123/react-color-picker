import React, { useState } from 'react'

function ColorPicker() {

    const [color, setColor] = useState("#ffffff");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className="color-container">
            <h1>React Color</h1>
            <div className='color-display' style={{ backgroundColor: color }}>
                <p>{color}</p>
            </div>
            <div className='color-input'>
                <label htmlFor="">Select a Color: </label>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
        </div>
    )
}

export default ColorPicker