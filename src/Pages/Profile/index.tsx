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
            console.log('---->', response)
            setState({user: response})
        })
    },[])


    return (
        <div>
            <BasicInfo />
        </div>
    )
};



export default withRouter(withFirebase(ProfilePage));