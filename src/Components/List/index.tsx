import React, {useState, useEffect} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@material-ui/core';
import { withFirebase } from '../../Containers/Firebase';
import { withRouter } from 'react-router';

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

function InteractiveList(props: any) {

    const classes = useStyles();

    const [items, setItems] = useState();
    
    useEffect(() => {
        props.firebase.getNurses().then((response: any) => {
            setItems(response)
        })
    }, [])


    function goToProfile(item: any): ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined {
        return () => {
            props.history.push(`/profile/${item.id}`);
        };
    }



    if(!items) {
        return (
            <div>Loading....</div>
        )
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        Available Care Givers
                    </Typography>
                    <div className={classes.demo}>
                        {
                            items.map((item: any) => (
                                <List key={item.id} className={classes.list}>
                                    <ListItem button onClick={goToProfile(item)}>
                                        <ListItemText
                                            primary={`${item.email}`}
                                            secondary={`${item.isNurse}`}
                                        />
                                    </ListItem>
                                    <ListItemSecondaryAction>
                                        <Button color="primary">Schedule</Button>
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

export default withRouter(withFirebase(InteractiveList))