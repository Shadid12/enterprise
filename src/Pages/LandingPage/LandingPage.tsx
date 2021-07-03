import React, { Component } from 'react'


const IMG = require('../../assets/mim.png')


// state
// TODO: GET SESSION FROM SESSION CONTEXT
const initialState = { signedIn: true }

const LandingPage = (state = initialState) => {
    return (
        <div>
            <a href="/signup"> Sign Up </a>
            <a href="/signin"> Sign In </a>
            <a href="/onboard"> onboard </a>
            <a href="/schedule/123456"> Schedule </a>
            <a href="/clients"> Clients </a>
            <a href="/profile/JpXPvHM2ckdKo7j9S6VwwoG5GmC2"> Profile </a>
            <a href="/chat"> Chat </a>
        </div>
    )
};



export default LandingPage;