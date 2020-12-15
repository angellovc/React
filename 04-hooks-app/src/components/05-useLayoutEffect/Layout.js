import React, { useLayoutEffect, useRef, useState } from 'react';
import './layout.css';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

const Layout = () => {
  
    const {counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote} = data != null && data[0];    
    const pTag = useRef();
    const [boxState, setBoxState] = useState({});

    useLayoutEffect(() => {
        setBoxState(pTag.current.getBoundingClientRect());
    }, [quote]);    
    return (
      <div>
        <h1>Layout Effect</h1>
        <hr />
        {
              <blockquote className="blockquote text-right">
              <p  
                  ref={pTag}
                  className="mb-0">{quote}</p>
            </blockquote>
        }
        {
            <pre>
                {JSON.stringify(boxState, null, 3)}
            </pre>
        }
        <button
          className="btn btn-primary"
          onClick={() => increment(1)}>
          Next Quote</button>
      </div>
    )
}

export default Layout