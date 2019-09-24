import React, {  useEffect, useState} from 'react'
import BasicInfo from '../../Components/BasicInfo/index';
import { withFirebase } from '../../Containers/Firebase';
import { withRouter } from 'react-router';
import IUserModel from '../../Models/IUserModel';

const ProfilePage = (props: any) => {
    const [state, setState] = useState({
        user: {}
    });
    
    useEffect(() => {
        const id = props.match.params
        props.firebase.getUserById(id.id).then((response: IUserModel) => {
            let user = response
            user.id = id.id
            setState({user})

            // props.updateUserState(user)
        })

    },[])


    return (
        <div>
            <BasicInfo />
            <button onClick={() => {
                const id = props.match.params
                props.history.push(`/schedule/${id.id}`)
            }}>Book Care</button>
        </div>
    )
};



export default withRouter(withFirebase(ProfilePage));