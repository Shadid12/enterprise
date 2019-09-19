import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
      padding: '20px'
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    list: {
        border: '1px solid',
        marginBottom: '5px'
    }
  }),
);

export default function InteractiveList() {

    const classes = useStyles();
    let items = [
        {
            id: '1',
            name: 'shaddw',
            desc: 'adwdjjdjwjd'
        },
        {
            id: '2',
            name: 'asdwaddw',
            desc: 'adwdjjdjwjd'
        },
        {
            id: '3',
            name: 'shwawwew',
            desc: 'adwdjjdjwjd'
        },
        {
            id: '4',
            name: 'shdwdw',
            desc: 'adwdjjdjwjd'
        }
    ]
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        Avatar with text and icon
                    </Typography>
                    <div className={classes.demo}>
                        {
                            items.map((item) => (
                                <List key={item.id} className={classes.list}>
                                    <ListItem button>
                                        <ListItemText
                                            primary={`${item.name}`}
                                            secondary={`${item.desc}`}
                                        />
                                    </ListItem>
                                    <ListItemSecondaryAction>
                                        <Button color="primary">Approve</Button>
                                    </ListItemSecondaryAction>
                                </List>
                            ))
                        }
                    </div>
                </Grid>
            </Grid>
        </div>
    )

}