import React, { Component } from 'react'


// styles
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link, Container, CssBaseline, Avatar, TextField, Button, Grid, Box, Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: 100,
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'center',
        padding: 40,
        // flexWrap: 'wrap'
    },
    root2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 40,
        flexWrap: 'wrap'
    },
    bigAvatar: {
        maxWidth: 300,
        borderRadius: 10
    },
    middle: {
        width: '800px'
    },
    title: {},
    rating: {}
}));

export default function ProfileView() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Grid className={classes.root2}>
                <Grid direction="row" >
                    <img alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/spongebob/images/2/2a/SpongeBob_SquarePants%28copy%290.png/revision/latest?cb=20160507142128" className={classes.bigAvatar} />
                    <div>
                        Change Photo
                    <input type="file" name="file" />
                    </div>
                </Grid>
                <Grid className={classes.middle}>
                    <Typography variant="h2" >First Last Name</Typography>
                    <Typography variant="h5" >Title</Typography>
                    <Typography className={classes.rating} variant="overline" >Rating: 8/10</Typography>
                </Grid>
                <Grid>
                    <a href="/" >Edit Profile</a>
                </Grid>
            </Grid>
            <hr></hr>
            <Grid className={classes.root2}>
                <Grid direction="row" >
                    <Typography variant="h4" >First Last Name</Typography>
                    <ol>
                        <li>Stuff 1</li>
                        <li>Stuff 2</li>
                        <li>Stuff 3</li>
                        <li>Stuff 4</li>

                    </ol>
                </Grid>
                <Grid className={classes.middle}>
                    <Typography variant="h2" >First Last Name</Typography>
                    <Typography variant="h5" >Title</Typography>
                    <Typography className={classes.rating} variant="overline" >Rating: 8/10</Typography>
                </Grid>
                <Grid>
                    <a href="/" >Edit Profile</a>
                </Grid>
            </Grid>
        </Card>
    )
}
