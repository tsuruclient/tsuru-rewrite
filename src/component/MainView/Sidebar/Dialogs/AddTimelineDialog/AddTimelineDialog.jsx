import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogActions,
    DialogContent,
    DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import ExpandMore from 'material-ui-icons/ExpandMore';

import TimelineMenu from './TimelineMenu';
import AccountMenu from './AccountMenu';

const styles = (theme) => ({
    root: {
        overflow: 'auto',
        width: '320',
    },
});

class AddTimelineDialog extends React.Component {
    state = {
        accountMenuOpen: false,
        accountMenuAnchorEl: null,
        typesSelected: 'Home',
        accountSelected: 0,
    }

    handleClickAddTimeline = () => {
        this.props.addTimeline({
            accountIndex: this.state.accountSelected,
            timelineTypeIndex: this.state.typesSelected,
        });
        this.props.onRequestClose();
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.onRequestClose}>
                <DialogTitle>{'Add Timeline'}</DialogTitle>
                <DialogContent>
                    <AccountMenu
                        accounts={this.props.accounts}
                        open={this.state.accountMenuOpen}
                        anchorEl={this.state.accountMenuAnchorEl}
                        selected={this.state.accountSelected}
                        handleOpenClick={event => {this.setState({accountMenuOpen: true, accountMenuAnchorEl: event.currentTarget})}}
                        handleItemClick={(event, index) => {this.setState({accountSelected: index, accountMenuOpen: false})}}
                        onRequestClose={() => {this.setState({accountMenuOpen: false, accountMenuAnchorEl: null})}} />
                    <TimelineMenu
                        open={this.state.typesMenuOpen}
                        anchorEl={this.state.typesMenuAnchorEl}
                        selected={this.state.typesSelected}
                        handleItemClick={(type) => {this.setState({typesSelected: type})}}
                        onRequestClose={() => {this.setState({typesMenuOpen: false, typesMenuAnchorEl: null})}} />
                </DialogContent>
                <DialogActions>
                    <Button raised color='primary' onClick={this.handleClickAddTimeline}>{'Add Timeline'}</Button>
                </DialogActions>
            </Dialog>
        )
    }
}

AddTimelineDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired
}

export default withStyles(styles)(AddTimelineDialog);