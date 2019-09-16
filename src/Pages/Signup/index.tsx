import React, { useState } from 'react';
import { ISignupPayloadModel } from '../../Models/ISignupPayloadModel';
import { withFirebase } from '../../Containers/Firebase'
import {
    Typography,
    Link,
    Container,
    CssBaseline,
    Avatar,
    TextField,
    Button,
    Grid,
    Box
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// styles 
import useStyles from './styles'

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
        props.firebase.createUser(state).then((response: firebase.auth.UserCredential | any) => {
            if (response.type) {
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