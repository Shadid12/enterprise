import React, { Fragment, useState } from 'react'
import { withAuthentication } from '../../Containers/Session'
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, Typography, Button } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IFirebase from '../../Models/IFirebase';
import { withRouter } from 'react-router-dom';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      justifyContent: 'end'
    },
}));


function Navigation(props: any) {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    const handleClickVariant = (variant: VariantType) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('You got a new  schedule', { variant });
      };

    const  signout = () => {
        const firebase: IFirebase = props.firebase;
        firebase.doSignOut()
        props.history.push('/')
    }

    function goto(route: string): ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined {
        return () => props.history.push(route);
    }

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <div  className={classes.title}>
                    <Button 
                        color="inherit"
                        onClick={goto('/')}
                    >
                        Home
                    </Button>
                    <Button onClick={handleClickVariant('warning')}>Notification</Button>
                </div>
                {
                    props.authUser  === 'not signed in' ? (
                        <Button color="inherit" onClick={() => props.history.push('/signin')}>Sign  in</Button>
                    ) : (<Button color="inherit" onClick={signout}>Logout</Button>)
                }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(withAuthentication(Navigation))