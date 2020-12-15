import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

const FocusScreen = () => {
  const inputRef = useRef();
  // const handlerFocus = () => document.querySelector('input').select();
  const handlerFocus = () => inputRef.current.select();
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        className="form-control"
        placeholder="Your Name" />
      <button
        className="btn btn-outline-primary mt-4"
        onClick={handlerFocus}>
          Focus
      </button>
    </div>
  )
}

export default FocusScreen
