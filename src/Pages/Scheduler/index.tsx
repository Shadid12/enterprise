import React, { Component } from 'react'
import AppointmentFormContainerBasic from '../../Components/Scheduler/index.js';
import { withFirebase } from '../../Containers/Firebase';
import { withRouter } from 'react-router';

class SchedulePage extends Component {
    

    render() {
        return (
            <div>
                <h1>Scheduler Title</h1>
                <AppointmentFormContainerBasic />
            </div>
        )
    }
}

export default  withRouter(withFirebase(SchedulePage))
