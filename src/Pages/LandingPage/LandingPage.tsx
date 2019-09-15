import React, { Component } from 'react'


const IMG = require('../../assets/mim.png')
export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <img src={IMG} alt="Some Img" />
                <a href="/signup">Sign Up</a>
                <a href="/signin">Sign In</a>

            </div>
        )
    }
}
