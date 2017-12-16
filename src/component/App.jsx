import React from 'react';
import {withStyles} from 'material-ui/styles';

import MainView from './MainView/MainView';
import AddAccountDialog from '../container/Dialog/AddAccountDialog';

const styles = theme => ({
    root: {
        width: "100%",
        height: "100vh",
        zIndex: 1
    },
    frame: {
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.load();
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <MainView />
                <AddAccountDialog />
            </div>
        )
    }
}

export default withStyles(styles)(App);
