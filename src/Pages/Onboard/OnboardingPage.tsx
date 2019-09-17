import React, { Fragment, useState } from 'react';
import { withFirebase } from '../../Containers/Firebase'
import IOnboardingPayload from '../../Models/IOnboardingPayload';
import {withAuthentication} from '../../Containers/Session'

function OnBoardingPage(props: any) {

    const INITIAL_STATE: IOnboardingPayload = {
        username: '',
        phone: 0,
        liability_number: 0,
        years_of_experience: 0,
        skills: '',
        education: '',
        ren_number: 0
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
            <h1>Nurse On Boarding Page</h1>
            <div>
                <label htmlFor="Enter Name" id="name">Name: </label>
                <input name="name" type="name" id="name" onChange={handleChange} />
            </div>
            <br />
            <div>
                <label htmlFor="Enter Prop1" id="prop1">Prop1: </label>
                <input name="prop1" type="text" id="prop1" onChange={handleChange} />
            </div>
            <br />
            <div>
                <label htmlFor="Enter Prop2" id="prop2">Prop2: </label>
                <input name="prop2" type="text" id="prop2" onChange={handleChange} />
            </div>
            <br />
            <button onClick={submit}>Sign up</button>
        </Fragment>
    );
}

const OnBoardingPageWrapped = withFirebase(OnBoardingPage)
export default withAuthentication(OnBoardingPageWrapped)