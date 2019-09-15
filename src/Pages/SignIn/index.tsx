import React, { Fragment, useState } from 'react';
import { ISignInPayloadModel } from '../../Models/ISignupPayloadModel';
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
        marginTop: theme.spacing(20),
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

function SignInPageBase(props: any) {

    const INITIAL_STATE: ISignInPayloadModel = {
        email: '',
        password: ''
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
        // <Fragment>
        //     <Paper className={classes.root}>
        //         <h1>Sign Up Page</h1>
        //         <div>
        //             <label htmlFor="Enter Email" id="email">Email:</label>
        //             <input name="email" type="email" id="email" onChange={handleChange} />
        //         </div>
        //         <br />
        //         <div>
        //             <label htmlFor="Enter Password" id="pass">Password:</label>
        //             <input name="password" type="password" id="pass" onChange={handleChange} />
        //         </div>
        //         <br />
        //         <button onClick={submit}>Sign up</button>
        //     </Paper>
        // </Fragment>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={submit}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
              </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
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

const SignInPage = withFirebase(SignInPageBase)
export default SignInPage