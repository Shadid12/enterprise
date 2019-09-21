import React, { Component } from 'react'
import ListView from '../../Components/ListView';
import { withFirebase } from '../../Containers/Firebase';


const IMG = require('../../assets/mim.png')


// state
// TODO: GET SESSION FROM SESSION CONTEXT
const initialState = { signedIn: true }

const LandingPage = (state = initialState) => {
    // switch (initialState.signedIn) {
    //     case true:
    //         return
    //         withFirebase(<div>
    //             <h1>YO</h1>
    //         </div>)
    //     case false:
    //         return (
    //             <div>
    //                 <h1>YO</h1>
    //             </div>
    //         )
    // }
    return (
        <div>
            <img src={IMG} ></img>
            <a href="/signup"> Sign Up </a>
            <a href="/signip"> Sign In </a>
            <a href="/onboard"> onboard </a>

            <ListView></ListView>

        </div>
    )
};



export default LandingPage;