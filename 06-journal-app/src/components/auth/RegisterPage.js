import React from 'react';
import validator from 'validator';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterEmailPasswordName } from '../../actions/auth';


const RegisterPage = () => {
    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);
    const [registerValues, handleRegisterValues] = useForm({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });
    const {name, email, password, passwordConfirm} = registerValues;
    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        if (isFormValid()) {
            dispatch(
                startRegisterEmailPasswordName(email, password, name)
            );
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch( setError('Name is required'))
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch( setError('A valid Email is required'))
            return false;
        } else if (password.length < 5) {
            dispatch( setError('Password should be at least 6 characters long'))
            return false
        } else if (password !== passwordConfirm) {
            dispatch( setError('Passwords should match'))
            return false
        }
        dispatch(removeError());
        return true;
    }

    return (
        <div>
            <h3 className="auth__title">Register</h3>
            <form
                className="animate__animated animate__fadeIn animate__faster"
                onSubmit={handleRegisterSubmit}
            >
                {
                    msgError && 
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                }
                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleRegisterValues}
                />
                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleRegisterValues}
                />
                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleRegisterValues}
                />
                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Confirm Password"
                    name="passwordConfirm"
                    value={passwordConfirm}
                    onChange={handleRegisterValues}
                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Register                 
                </button>
                <Link 
                    className="link"
                    to="/auth/login"
                >
                    Already Register?
                </Link>
            </form>
        </div>
    )
}

export default RegisterPage
