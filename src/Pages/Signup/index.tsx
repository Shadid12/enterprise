import React, { Fragment, useState } from 'react';
import { ISignupPayloadModel } from '../../Models/ISignupPayloadModel';
import { withFirebase } from '../../Containers/Firebase'


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

    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const submit = () => {
        setloading(true)
        console.log('--->', props.firebase)
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
            <button onClick={submit}>Sign up</button>
        </Fragment>
    );
}

const SignupPage = withFirebase(SignupPageBase)
export default SignupPage