import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';

import SettingsIcon from 'material-ui-icons/Settings';
import AddBoxIcon from 'material-ui-icons/AddBox';
import PersonAddIcon from 'material-ui-icons/PersonAdd';

import AccountIcon from './AccountIcon';
import AddTimelineDialog from './Dialogs/AddTimelineDialog/AddTimelineDialog';

const styles = theme => ({
    root: {
        margin: "3px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    accountSection: {
        display: "flex",
        flexDirection: "column",
        overflowY: "auto"
    }
});

class Sidebar extends React.Component {
    state = {
        addTimelineDialogOpen: false,
    }

    handleCloseAddTimelineDialog = () => {
        this.setState({addTimelineDialogOpen: false});
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <IconButton aria-label="Add Timeline" onClick={()=>{this.setState({addTimelineDialogOpen: true})}}>
                    <AddBoxIcon/>
                </IconButton>
                <div className={classes.accountSection}>
                    {
                        this.props.accounts.map((item, index) => (
                            <AccountIcon
                                key={index}
                                data={item.account.user}
                                domain={item.account.client.domain}
                                isValid={item.account.isValid}/>)
                    )}
                    <div>
                        <IconButton
                            onTouchTap={this.props.openAddAccountDialog}
                            aria-label="Add Account">
                            <PersonAddIcon/>
                        </IconButton>
                        <AddTimelineDialog
                            accounts={this.props.accounts}
                            open={this.state.addTimelineDialogOpen}
                            onRequestClose={this.handleCloseAddTimelineDialog}
                            addTimeline={this.props.addTimeline} />
                    </div>
                </div>
                <IconButton
                    aria-label="General Setting"
                    style={{alignSelf: "flex-end"}}>
                    <SettingsIcon/>
                </IconButton>
            </Paper>
        );
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    accounts: PropTypes.array.isRequired,
}

export default withStyles(styles)(Sidebar);