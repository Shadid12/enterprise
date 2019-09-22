import React, { Component } from 'react'
import ListView from '../../Components/ListView';
import { withFirebase } from '../../Containers/Firebase';


const IMG = require('../../assets/mim.png')


// state
// TODO: GET SESSION FROM SESSION CONTEXT
const initialState = { signedIn: true }

const LandingPage = (state = initialState) => {
    return (
        <div>
            <img src={IMG} ></img>
            <a href="/signup"> Sign Up </a>
            <a href="/signin"> Sign In </a>
            <a href="/onboard"> onboard </a>
            <a href="/schedule/123456"> Schedule </a>
            <a href="/clients"> Clients </a>
            <a href="/profile/1234567"> Profile </a>

            <ListView></ListView>

        </div>
    )
};



export default LandingPage;