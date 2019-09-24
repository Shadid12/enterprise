import React, {useState, useEffect} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Button, Chip, TextField } from '@material-ui/core';
import { withFirebase } from '../../Containers/Firebase';
import { withRouter } from 'react-router';
import Paper from '@material-ui/core/Paper';

interface ChipData {
    key: number;
    label: string;
}

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
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    btn: {
        marginTop: '30px'
    }
  }),
);

function InteractiveList(props: any) {

    const classes = useStyles();

    const [items, setItems] = useState();

    const [chipData, setChipData] = React.useState<ChipData[]>([
        { key: 0, label: 'Long Term Care' },
        { key: 1, label: 'Cardiac' },
        { key: 2, label: 'Bowel' },
        { key: 3, label: 'Bedside' }
    ]);

    const [values, setValues] = React.useState<any>({
        name: ''
    });
    
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

    const handleDelete = (chipToDelete: ChipData) => () => {
        setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
    };

    const handleChange = (name: keyof any) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const updateChipList = () => {
        let oldChipsData = chipData
        let length = oldChipsData.length
        if(values.name) {
            let newItem: ChipData = {
                key: length,
                label: values.name
            }
            oldChipsData.push(newItem)
            setChipData(oldChipsData)
            setValues({name: ''})
        }
    }



    if(!items) {
        return (
            <div>Loading....</div>
        )
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                <TextField
                    id="standard-name"
                    label="Skill"
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                />
                <Button className={classes.btn} color="inherit" onClick={updateChipList}>Add</Button>
                <Paper className={classes.root}>
                        {
                            chipData.map(data => {
                            return (
                                <Chip
                                    key={data.key}
                                    label={data.label}
                                    onDelete={handleDelete(data)}
                                    className={classes.chip}
                                />
                            );
                        })}
                    </Paper>
                </Grid>
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