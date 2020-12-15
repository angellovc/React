import './effects.css';
import useForm from '../../hooks/useForm';

const FormWithCustomHook = () => {

  const [formState, setFormState] = useForm({
    name: '',
    password: '',
    email: ''
  });
  const {name, password, email} = formState;

  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handlerSubmit}>
     <h2>Form With Custom Hook</h2>
     <hr />
     <div className="form-group">
       <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Name"
        autoComplete="off"
        value={name}
        onChange={setFormState}
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
        onChange={setFormState}
        />
     </div>
     <div className="form-group">
       <input
        type="password"
        name="password"
        className="form-control"
        placeholder="password"
        autoComplete="off"
        value={password}
        onChange={setFormState}
        />
     </div>
     <button type="submit" className="btn btn-primary" >Save</button>
    </form>
  )
}

export default FormWithCustomHook;
