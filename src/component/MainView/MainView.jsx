import React from 'react';
import { withStyles } from 'material-ui/styles';

import Sidebar from '../../container/Sidebar';
import TimelineView from '../../container/TimelineView';
import Snackbar from '../../container/Snackbar.js';

const styles = theme => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "row"
    }
});

const MainView = ({classes}) => (
    <div className={classes.root}>
        <Sidebar />
        <TimelineView />
        <Snackbar />
    </div>
)

export default withStyles(styles)(MainView);
