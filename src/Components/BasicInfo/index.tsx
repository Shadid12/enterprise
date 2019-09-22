import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

export default function BasicInfo() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <div className={classes.main}>
                        <span>Basic Info Card</span>
                        <div>
                            <span>Username: </span>
                        </div>
                        <div>
                            <span>Email: </span>
                        </div>
                        <div>
                            <span>REN: </span>
                        </div>
                    </div>
                </Paper>
            </Grid>
        </Grid>
        </div>

    )

}