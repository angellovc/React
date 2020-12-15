import {useState} from 'react';

const useForm = (initialState = {}) => {

  const [formState, setFormState] = useState(initialState);

  const reset = () => {
    setFormState(initialState);
  }

  const handlerInput = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  }
  

  return ([
    formState,
    handlerInput,
    reset
  ]);
}

export default useForm
