import React, { Fragment, useState  } from 'react';
import { SignupPayloadModel } from '../../Models/SignupPayloadModel';

export default function SignupPage() {
    
    const INITIAL_STATE: SignupPayloadModel = {
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
          <button onSubmit={submit}>Sign up</button>
      </Fragment>
    );
}