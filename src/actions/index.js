import types from './types';
import axios from 'axios';


const BASE_URL = 'http://api.reactprototypes.com';

export function signUp(cred) {
    return dispatch => {
        axios.post(`${BASE_URL}/signup`, cred).then(resp => {
            console.log('sign up response: ', resp);

            localStorage.setItem('token', resp.data.token);

            dispatch({ type: types.SIGN_UP });

        }).catch(err => {
            console.log('sign up error', err.response.data.error);
            if (err.response) {
                return dispatch({
                    type: types.ERROR,
                    error: err.response.data.error
                });

            }
            dispatch({
                type: types.ERROR,
                error: 'Error creating account. Try again later'
            })
        });
    }
}

export function signIn(cred) {
    return async dispatch => {
        try {
            const resp = await axios.post(`${BASE_URL}/signin`, cred);

            console.log("sign in response ", resp);

            localStorage.setItem('token', resp.data.token);

            dispatch({ type: types.SIGN_IN });
        } catch (err) {
            console.log('sign in error', err.message);

            dispatch({
                type: types.ERROR,
                error: 'Invalid Email and or Password'
            });
        }
    }
}

export function signOut() {
    localStorage.removeItem('token');

    return {
        type: types.SIGN_OUT
    }
}