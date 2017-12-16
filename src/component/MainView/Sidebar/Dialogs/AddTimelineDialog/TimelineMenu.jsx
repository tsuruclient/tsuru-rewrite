// @flow

import React from 'react'
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Radio from 'material-ui/Radio';


import ExpandMore from 'material-ui-icons/ExpandMore';

import timelineTypes from '../../../../../redux/data/constants/timelineTypes';

const style = theme => {
    root: {

    }
}

const TimelineMenu = ({open, anchorEl, selected, handleItemClick, onRequestClose}) => (
    <List>
        {Object.keys(timelineTypes).map((item, index) => (
            <ListItem
                key={index}
                button
                onClick={() => handleItemClick(item)}
                aria-label=''>
                <ListItemText primary={item} secondary={timelineTypes[item].description}/>
                <ListItemSecondaryAction>
                    <Radio
                        checked={item === selected}/>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
)

export default withStyles(style)(TimelineMenu);
