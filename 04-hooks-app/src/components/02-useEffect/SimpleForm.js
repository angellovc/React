import {useEffect, useState} from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: "",
    email: ""
  });
  const {name, email} = formState;

  useEffect(() => {
    console.log('hey!');
  }, []);

  useEffect(() => {
    console.log('formState has changed');
  }, [formState]);

  useEffect(() => {
    console.log('email has changed');
  }, [email]);

  useEffect(() => {
    console.log('name has changed');
  }, [name]);


  const handlerInputName = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
     <h2>Use Effect</h2>
     <hr />
     <div className="form-group">
       <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Name"
        autoComplete="off"
        value={name}
        onChange={handlerInputName}
        />
     </div>
     <div className="form-group">
       <input
        type="text"
        name="email"
        className="form-control"
        placeholder="Email"
        autoComplete="off"
        value={email}
        onChange={handlerInputName}
        />
     </div>
     { (name ==='coords') && <Message /> }
    </>
  )
}

export default SimpleForm
