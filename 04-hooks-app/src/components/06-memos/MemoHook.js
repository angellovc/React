import { useMemo, useState } from 'react';
import { heavyProcess } from '../../helpers/heavyProcess';
import useCounter from '../../hooks/useCounter'; 
import '../02-useEffect/effects.css'

const MemoHook = () => {

    const {counter, increment} = useCounter(1000);
    const [show, setShow] = useState(true);
    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h2>Counter: <small>{counter}</small></h2>
            <p>
                {memoHeavyProcess}
            </p>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => setShow(!show)}
            >
                Show {JSON.stringify(show)}
            </button>
        </div>
    )
}

export default MemoHook
