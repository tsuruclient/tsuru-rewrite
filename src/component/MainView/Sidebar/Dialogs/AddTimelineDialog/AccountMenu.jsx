import React from 'react'
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import Avatar from 'material-ui/Avatar';

import ExpandMore from 'material-ui-icons/ExpandMore';

const style = theme => {
    root: {

    }
}

const AccountMenu = ({accounts, open, anchorEl, selected, handleOpenClick, handleItemClick, onRequestClose}) => (
    <div>
        <List>
            <ListItem
                button
                onClick={event => handleOpenClick(event)}
                aria-haspopup='true'
                aria-controls='lock-menu'
                aria-label=''>
                <ListItemText primary={accounts[selected].account.user.screenName} secondary={accounts[selected].account.client.domain}/>
                <ExpandMore />
            </ListItem>
        </List>
        <Menu
            id='account-menu'
            open={open}
            anchorEl={anchorEl}
            onRequestClose={onRequestClose}>
            {accounts.map((item, index) => (
                <MenuItem
                    key={index}
                    selected={index === selected}
                    onClick={event => handleItemClick(event, index)}>
                    <Avatar src={item.account.user.avatar} />
                    {' @' + item.account.user.screenName + '@' + item.account.client.domain}
                </MenuItem>
            ))}
        </Menu>
    </div>
)

export default withStyles(style)(AccountMenu);
