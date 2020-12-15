import React from 'react';
import {useDispatch} from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';
import useForm from '../../hooks/useForm';
import './login.css';

const LoginPage = () => {

    /* Login State and Handlers */
    const [formLoginState, handlerLoginForm] = useForm({
        loginEmail: '',
        loginPassword: ''
    });

    const {loginEmail, loginPassword} = formLoginState;

    const dispatch = useDispatch();

    const handlerLoginSubmit = (event) => {
        event.preventDefault();
        dispatch(
            startLogin(loginEmail, loginPassword)
        );
    }

    /* Register State and Handlers */
    const [formRegisterState, hanlderRegisterForm] = useForm({
        registerName: '',
        registerEmail: '',
        registerPassword: '',
        registerPasswordConfirm: '',
    });

    const {
        registerName,
        registerEmail,
        registerPassword,
        registerPasswordConfirm } = formRegisterState;

    const handlerRegisterSubmit = (event) => {
        event.preventDefault();
        if (registerPassword !== registerPasswordConfirm) {
            Swal.fire('Error', 'Password fields must be identical');
        } else {
            dispatch(
                startRegister(
                    registerEmail,
                    registerPassword,
                    registerName
                )
            );
        }
    }

    return (
        <div className="container login-container">
            <div className="row">
                {/* Login section */}
                <div className="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form onSubmit={handlerLoginSubmit}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name='loginEmail'
                                value={loginEmail}
                                onChange={handlerLoginForm}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='loginPassword'
                                value={loginPassword}
                                onChange={handlerLoginForm}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>
                {/* Register Section */}
                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handlerRegisterSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="registerName"
                                value={registerName}
                                onChange={hanlderRegisterForm}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="registerEmail"
                                value={registerEmail}
                                onChange={hanlderRegisterForm}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="registerPassword"
                                values={registerPassword}
                                onChange={hanlderRegisterForm}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name="registerPasswordConfirm"
                                values={registerPasswordConfirm}
                                onChange={hanlderRegisterForm}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage