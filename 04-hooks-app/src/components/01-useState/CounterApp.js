import React, {useState} from 'react'
import './counter.css';

const CounterApp = () => {
  const [state, setcounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
    counter5: 50,
  });
  const {counter1, counter2, counter3, counter4, counter5} = state;
  const handlerAdd1 = () => setcounter({
    ...state,
    counter1: counter1 + 1
  });
  return (
    <>
      <h2>Counter1: {counter1}</h2>
      <h2>Counter2: {counter2}</h2>
      <h2>Counter3: {counter3}</h2>
      <h2>Counter4: {counter4}</h2>
      <h2>Counter5: {counter5}</h2>
      <hr/>
      <button
        className="btn btn-primary"
        onClick={handlerAdd1}
      >+1 Counter1</button>
    </>
  )
}

export default CounterApp
