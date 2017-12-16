import React from 'react';
import {withStyles} from 'material-ui/styles';

import Timeline from './TimeLine/TimeLine';

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "nowrap",
        height: "100%",
        overflowX: "auto"
    }
});

class TimelineView extends React.Component {
    render() {
        const {
            classes,
            timelines,
            account,
            tweets,
            getRequest,
            postRequest,
            deleteTimeline,
            updateTweetBox,
            timelineTextBox,
            latestItem } = this.props;
        return (
            <div className={classes.root}>
                {timelines.map((tl, index) => (
                    <Timeline
                        key={index}
                        index={index}
                        timeline={tl}
                        account={account(tl.ownerIndex)}
                        tweets={tweets}
                        getRequest={getRequest}
                        postRequest={postRequest}
                        deleteTimeline={deleteTimeline}
                        updateTweetBox={updateTweetBox}
                        timelineTextBox={timelineTextBox}
                        latestItem={latestItem}/>
                ))}
            </div>
        )
    }
}

/*
const TimelineView = ({
    classes,
    timelines,
    accounts,
    getRequest,
    postRequest,
    updateTweetBox,
    timelineTextBox
    }) => (
        <div className={classes.root}>
            {timelines.map((tl, index) => (
                <Timeline
                    key={index}
                    index={index}
                    timeline={tl}
                    account={accounts[tl.ownerIndex]}
                    getRequest={getRequest}
                    postRequest={postRequest}
                    updateTweetBox={updateTweetBox}
                    timelineTextBox={timelineTextBox}/>
            ))}
        </div>
    )
*/

export default withStyles(styles)(TimelineView);