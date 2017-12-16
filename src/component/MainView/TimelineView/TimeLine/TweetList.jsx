import React from 'react';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';

import Tweet from './Tweet/Tweet';

const styles = theme => ({
    root: {
        overflowX: 'hidden',
        overflowY: 'auto',
    }
});

class TweetList extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        const { tweets } = this.props;
        const nextTweets = nextProps.tweets;

        if(tweets !== nextTweets) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const {classes, tweets} = this.props;
        return (
            <div className={classes.root}>
                <Divider/>
                <ul>
                    {tweets.map((item, index) => (
                        <div key={index}>
                            <Tweet data={item}/>
                            <Divider />
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}
export default withStyles(styles)(TweetList);
