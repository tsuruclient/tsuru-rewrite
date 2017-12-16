// @flow

import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';

import timelineTypes from '../../../../redux/data/constants/timelineTypes.js';
import * as api from '../../../../redux/data/entity/Apis.js';

import TweetList from './TweetList';
import TweetBox from './TweetBox/TweetBox';
import Title from './Title';

const styles = theme => ({
    root: {
        margin: 3,
        width: 320,
        minWidth: 320,
        maxWidth: 320,
        height: "calc(100% - 6px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start',
    },
    box: { },
});

class Timeline extends React.Component {
    constructor(props){
        super(props);
        this.update = this.update.bind(this);
        this.deleteTimeline = this.deleteTimeline.bind(this);
    }

    state = {
        TweetBoxExpanded: false,
        anchorEl: null,
        openMenu: false
    };

    update() {
        const { account, timeline, latestItem } = this.props;
        let payload = {
            count: 30,
        };
        const latestTweet = latestItem(timeline.ownerIndex, timelineTypes[timeline.timelineType].dataname);
        if (latestTweet) {
            payload = Object.assign({}, payload, { 'since_id' : latestTweet.id });
        }
        this.props.getRequest(
            timeline.ownerIndex,
            timelineTypes[timeline.timelineType].dataname,
            account.client,
            timelineTypes[timeline.timelineType].api[account.service],
            payload);
        this.setState({ openMenu: false, anchorEl: null });
    }

    deleteTimeline() {
        const { index, deleteTimeline } = this.props;
        deleteTimeline(index);
        this.setState({ openMenu: false, anchorEl: null });
    }

    render(): any {
        const { classes, timeline, account, tweets, index } = this.props;
        return (
            <Paper className={classes.root}>
                <Toolbar>
                    <div style={{marginRight: "auto"}}>
                        <Title
                            timelineName={timeline.timelineType}
                            account={account} />
                    </div>
                    <div style={{marginLeft: "auto"}}>
                        <IconButton
                            aria-owns={this.state.open ? 'simple-menu': null}
                            aria-haspopup="true"
                            onTouchTap={(event) => {this.setState({ openMenu: true, anchorEl: event.currentTarget })}}>
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={this.state.anchorEl}
                            open={this.state.openMenu}
                            onRequestClose={() => {this.setState({ openMenu: false })}}>
                            <MenuItem onClick={this.update}>{'Update'}</MenuItem>
                            <MenuItem onClick={this.deleteTimeline}>{'Delete Timeline'}</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
                    <TweetBox
                        text={this.props.timelineTextBox(this.props.index)}
                        onChange={this.props.updateTweetBox}
                        postRequest={this.props.postRequest}
                        client={account.client}
                        service={account.service}
                        tlIndex={index}/>
                <Divider/>
                <TweetList
                    tweets={tweets(timeline.ownerIndex, timelineTypes[timeline.timelineType].dataname)} />
            </Paper>
        );
    }
}

export default withStyles(styles)(Timeline);
