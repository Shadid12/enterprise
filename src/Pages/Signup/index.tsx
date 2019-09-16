import React, { Fragment, useState } from 'react';
import { ISignupPayloadModel } from '../../Models/ISignupPayloadModel';
import { withFirebase } from '../../Containers/Firebase'
import IError from '../../Models/IError';
import IFirebase from '../../Models/IFirebase';

// Styles 
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Link, Container, CssBaseline, Avatar, TextField, FormControl, Button, Checkbox, Grid, Box } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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

function SignupPageBase(props: any) {

    const INITIAL_STATE: ISignupPayloadModel = {
        email: '',
        password: '',
        password2: ''
    };

    const [state, setState] = useState(
        INITIAL_STATE
    );

    const [loading, setloading] = useState(
        false
    );

    const [error, setError] = useState(
        null
    );

    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const submit = () => {
        setloading(true)
<<<<<<< HEAD
        props.firebase.createUser(state).then((response: firebase.auth.UserCredential | any) => {
            if (response.type) {
=======
        props.firebase.createUser(state).then( (response:firebase.auth.UserCredential | any) => {
            if( response.type ) {
>>>>>>> 487e881ee1ea2cfe7d277db105f5af8b52022fd2
                setError(response)
            } else {
                console.log(response)
                // TODO: go to next protected routes
            }
            setloading(false)
        })
    }

    const classes = useStyles();


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
        </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="number"
                        label="Patient Number"
                        name="number"
                        autoComplete="number"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Password2"
                        label="Re-type Password"
                        type="password2"
                        id="password2"
                        autoComplete="current-password2"
                    />

                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={submit}
                            // disabled={passwordValidator}
                            >
                                Sign Up
                    </Button>
                        )
                    }
                    {
                        error ? (
                            <div>This Email is probably taken !!</div>
                        ) : null
                    }
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
              </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signin" variant="body2">
                                {"Already have an account? Sign Ip"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container >
    );
}

const SignupPage = withFirebase(SignupPageBase)
export default SignupPage