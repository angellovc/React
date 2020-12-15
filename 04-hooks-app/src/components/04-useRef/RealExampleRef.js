import React, {useState} from 'react';
import '../02-useEffect/effects.css';
import MultipleCustomeHooks from '../03-examples/MultipleCustomeHooks';

const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  const handlerShow = () => setShow(!show);

  return (
    <div>
        <h3>Real Example Ref</h3>
        {show && <MultipleCustomeHooks />}
        <button
          className="btn btn-primary mt-3"
          onClick={handlerShow}>
          Show/Hidde
        </button>
    </div>
  )
}

export default RealExampleRef
