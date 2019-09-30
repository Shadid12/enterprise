import React, {useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { IUserInfo } from '../../Models/IUserInfo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
    }
  }),
);

export default function BasicInfo(props: any) {
    const classes = useStyles();

    const [state, setState] = useState({
        isEdit: false,
        username: '',
        email: '',
        ren: ''
    });

    const updateView = () => {
        setState({...state, isEdit: true,
            username: props.user.username ? props.user.username : '',
            email: props.user.email,
            ren: props.user.ren ? props.user.ren : ''
        })
    }

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            {
                state.isEdit ? (
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                        <div className={classes.main}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoFocus
                                value={state.username}
                                onChange={changeInput()}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoFocus
                                type="email"
                                value={state.email}
                                onChange={changeInput()}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="ren"
                                label="REN"
                                name="ren"
                                autoFocus
                                value={state.ren}
                                onChange={changeInput()}
                            />
                            <Button color="primary" onClick={() => {
                                let payload: IUserInfo = {
                                    username: state.username,
                                    email: state.email,
                                    ren: state.ren,
                                    id: props.user.id
                                }
                                props.update(payload)
                            }}>
                                Update
                            </Button>
                        </div>
                        </Paper>
                    </Grid>
                ) : 
                (
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div className={classes.main}>
                                <span>Basic Info Card</span>
                                <div>
                                    <span>Username: {props.user.username}</span>
                                </div>
                                <div>
                                    <span>Email: {props.user.email}</span>
                                </div>
                                <div>
                                    <span>REN: {props.user.ren}</span>
                                </div>
                                <Button color="secondary" onClick={updateView}>
                                    Update Info
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                )
            }
        </Grid>
        </div>

    )


    function changeInput(): ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined {
        return (event) => {
            setState({ ...state, [event.target.name]: event.target.value });
        };
    }
}