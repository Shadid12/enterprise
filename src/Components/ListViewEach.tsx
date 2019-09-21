import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';

export const ListViewEach = (props: any) => {
    return (
        <ListItem style={{ border: '1px solid black' }} alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary="Summer BBQ"
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            to Scott, Alex, Jennifer
              </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}

