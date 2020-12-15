import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    const increment = useCallback((num) => {
        setCounter(counter => counter + num);
    }, [setCounter]);

    return (
        <div>
            <h1>UseCallback Hook</h1>
            <h2>Counter: <small>{counter}</small></h2>
            <hr/>
            <ShowIncrement increment={increment} />
        </div>
    )
}

export default CallbackHook
