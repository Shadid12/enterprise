import React, { Fragment, useState } from 'react';
import { ISignupPayloadModel } from '../../Models/ISignupPayloadModel';
import { withFirebase } from '../../Containers/Firebase'
import IError from '../../Models/IError';
import IFirebase from '../../Models/IFirebase';


function SignupPageBase(props: any) {

    const INITIAL_STATE: ISignupPayloadModel = {
        email: '',
        password: ''
    };

    const [state, setState] = useState(
        INITIAL_STATE
    );

    const [loading, setloading] = useState(
        false
    );

    const [error, setError] = useState(
        null
    );

    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const submit = () => {
        setloading(true)
        props.firebase.createUser(state).then( (response:firebase.auth.UserCredential | any) => {
            if( response.type ) {
                setError(response)
            } else {
                console.log(response)
                // TODO: go to next protected routes
            }
            setloading(false)
        })
    }

    return (
        <Fragment>
            <h1>Sign Up Page</h1>
            <div>
                <label htmlFor="Enter Email" id="email">Email:</label>
                <input name="email" type="email" id="email" onChange={handleChange} />
            </div>
            <br />
            <div>
                <label htmlFor="Enter Password" id="pass">Password:</label>
                <input name="password" type="password" id="pass" onChange={handleChange} />
            </div>
            {loading ? (
                <div>Loading...</div>
                ) : (
                <button onClick={submit}>Sign up</button>      
                )
            }
            {
                error ? (
                    <div>This Email is probably taken !!</div>
                ) : null
            }
        </Fragment>
    );
}

const SignupPage = withFirebase(SignupPageBase)
export default SignupPage