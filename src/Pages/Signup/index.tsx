import React, { Fragment, useState } from 'react';
import { ISignupPayloadModel } from '../../Models/ISignupPayloadModel';
import { withFirebase } from '../../Containers/Firebase'

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

    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const submit = () => {
        setloading(true)
        console.log('--->', props.firebase)
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
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password2"
                        label="Re-Enter Password"
                        type="password"
                        id="password2"
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={submit}
                        disabled={loading || 
                            state.password !== state.password2 ||
                            state.email === '' ||
                            state.password !== state.password2 ||
                            state.password === ''
                        }
                    >
                        Sign Up
                    </Button>

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
        </Container>
    );
}

const SignupPage = withFirebase(SignupPageBase)
export default SignupPage