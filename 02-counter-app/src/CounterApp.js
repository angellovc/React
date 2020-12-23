import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value);

  const handlerAdd = () => setCounter(counter + 1);
  const handlerSubs = () => setCounter(counter - 1)
  const handlerReset = () => setCounter(value);

  return (
    <Fragment>
      <h1>Counter App</h1>
      <h2>Number: {counter}</h2>
      <button onClick={handlerAdd} >+1</button>
      <button onClick={handlerReset}>Restart</button>
      <button onClick={handlerSubs}>-1</button>
    </Fragment>
  );
}
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp;


