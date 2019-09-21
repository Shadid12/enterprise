import React, { useState } from 'react';
import { withFirebase } from '../../Containers/Firebase'
import IOnboardingPayload from '../../Models/IOnboardingPayload';
import { withAuthentication } from '../../Containers/Session'
import { makeStyles } from '@material-ui/core/styles';

// Meterial UI
import { Typography, Link, Container, CssBaseline, Avatar, TextField, Button, Grid, Box } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


function OnBoardingPage(props: any) {

    const INITIAL_STATE: IOnboardingPayload = {
        username: '',
        phone: 0,
        liability_number: 0,
        years_of_experience: 0,
        skills: '',
        education: '',
        ren_number: 0
    };

    const [state, setState] = useState(
        INITIAL_STATE
    );

    const [loading, setloading] = useState(
        false
    );

    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const submit = () => {
        setloading(true)
    }
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h2">On Boarding</Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="phone"
                        label="Phone Number"
                        type="number"
                        id="phone"
                        autoComplete="phone"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="liability_number"
                        label="Liability Number"
                        type="number"
                        id="liability_number"
                        autoComplete="liability_number"
                    />
                    {/* SKILLZ COMPONENT */}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="years_of_experience"
                        label="years_of_experience"
                        type="number"
                        id="years_of_experience"
                        autoComplete="years_of_experience"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="education"
                        label="Education"
                        type="string"
                        id="education"
                        autoComplete="Education"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="ren_number"
                        label="REN Nnumber"
                        type="number"
                        id="ren_number"
                        autoComplete="ren_number"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={submit}
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </Container>
    );
}

const OnBoardingPageWrapped = withFirebase(OnBoardingPage)
export default withAuthentication(OnBoardingPageWrapped)