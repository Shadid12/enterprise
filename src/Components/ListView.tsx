import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';

//

import { ListViewEach } from "./ListViewEach";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        alignItems: 'center'
    },
}));


export default function ListView() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    return (
        <div className={classes.root}>
            {
                <div>
                    <ExpansionPanelSummary
                        style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <ListViewEach></ListViewEach>
                        <ListViewEach></ListViewEach>
                        <ListViewEach></ListViewEach>
                        <ListViewEach></ListViewEach>

                    </ExpansionPanelSummary>
                </div>

            }
        </div >
    );
}