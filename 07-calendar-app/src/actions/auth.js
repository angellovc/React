import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch"
import types from "../types/types";

export const startLogin = (email, password) => {
    const data = {
        email: email.toLowerCase(),
        password: password.toLowerCase()
    };
    return async (dispatch) => {
        const response = await fetchWithoutToken('auth', data, 'POST');
        const body = await response.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(
                login({
                    uid: body.uid,
                    name: body.name
                })
            );
        } else {
            const errorMessage = body.msg? body.msg : body.errors.errors[0].msg;
            Swal.fire('Error', errorMessage, 'error');
        }
    }
}

export const startRegister = (email, password, name) => {
    return async (dispatch) => {
        const data = {
            email,
            password,
            name
        }
        const resposne = await fetchWithoutToken('auth/register', data, 'POST');
        const body = await resposne.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(
                login({
                    uid: body.uid,
                    name: body.name
                })
            );
        } else {
            const errorMessage = body.msg? body.msg : body.errors.errors[0].msg;
            Swal.fire('Error', errorMessage, 'error');
        }
    }
}

export const startChecking = () => {
    return async (dispatch) => {
        const resposne = await fetchWithToken('auth/renew');
        const body = await resposne.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(
                login({
                    uid: body.uid,
                    name: body.name
                })
            );
        } else {
            dispatch(checkingFinish());
        }
    }
}

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}

const checkingFinish = () => ({
    type: types.authChekingFinish
})

const login = (user) => ({
    type: types.authLogin,
    payload: user
});

const logout = () => ({
    type: types.authLogout
})