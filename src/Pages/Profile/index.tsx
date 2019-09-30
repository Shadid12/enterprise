import React, {  useEffect, useState} from 'react'
import BasicInfo from '../../Components/BasicInfo/index';
import { withFirebase } from '../../Containers/Firebase';
import { withRouter } from 'react-router';
import IUserModel from '../../Models/IUserModel';
import { CircularProgress, makeStyles, createStyles, Theme } from '@material-ui/core';
import { IUserInfo } from '../../Models/IUserInfo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      margin: theme.spacing(2),
    },
  }),
);

const ProfilePage = (props: any) => {
    const classes = useStyles();
    const [state, setState] = useState({
        user: {}
    });

    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        getUser()
    },[])

    const getUser = () => {
        const id = props.match.params
        props.firebase.getUserById(id.id).then((response: IUserModel) => {
            let user = response;
            user.id = id.id;
            setState({ user });
            setLoading(false)
        });
    } 


    const updateUserInfo = (payload: IUserInfo) => {
        setLoading(true)
        props.firebase.updateUserInfo(payload).then((res: any) => {
            getUser()
        })
    };

    return (
        <div>
            {loading ? (
                <CircularProgress className={classes.progress} />
                ) : 
                <BasicInfo user={state.user} update={updateUserInfo}/>
            } 
            <button onClick={() => {
                const id = props.match.params
                props.history.push(`/schedule/${id.id}`)
            }}>Book Care</button>
        </div>
    )
};



export default withRouter(withFirebase(ProfilePage));