import React, { Fragment, useState } from 'react';
import { withFirebase } from '../../Containers/Firebase'

function OnBoardingPage(props: any) {

    const INITIAL_STATE = {
        name: '',

        email: '',
        password: ''
    };

    // const [state, setState] = useState(
    //     INITIAL_STATE
    // );

    // const [loading, setloading] = useState(
    //     false
    // );

    // const handleChange = (event: any) => {
    //     setState({ ...state, [event.target.name]: event.target.value });
    // }

    // const submit = () => {
    //     setloading(true)
    //     console.log('--->', props.firebase)
    // }

    return (
        <Fragment>
            <h1>Nurse On Boarding Page</h1>
            {/* <div>
                <label htmlFor="Enter Email" id="email">Email:</label>
                <input name="email" type="email" id="email" onChange={handleChange} />
            </div>
            <br />
            <div>
                <label htmlFor="Enter Password" id="pass">Password:</label>
                <input name="password" type="password" id="pass" onChange={handleChange} />
            </div>
            <button onClick={submit}>Sign up</button> */}
        </Fragment>
    );
}

const OnBoardingPageWrapped = withFirebase(OnBoardingPage)
export default OnBoardingPageWrapped