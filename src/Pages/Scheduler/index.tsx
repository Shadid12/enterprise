import React, {  useEffect, useState} from 'react'
import AppointmentFormContainerBasic from '../../Components/Scheduler/index.js';
import { withFirebase } from '../../Containers/Firebase';
import { withRouter } from 'react-router';

function SchedulePage (props: any) {
    const [state, setState] = useState({
        schedule: {}
    });

    useEffect(() => {
        const id = props.match.params
        props.firebase.getScheduleById(id.id).then((response: any) => {
            let schedule = response
            // user.id = id.id
            setState({schedule})

            // props.updateUserState(user)
        })

    },[])

    return (
        <div>
            <h1>Scheduler Title</h1>
            <AppointmentFormContainerBasic />
        </div>
    )
    
}

export default  withRouter(withFirebase(SchedulePage))
