// @flow

import React from 'react'
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

import StarIcon from 'material-ui-icons/Star';
import RepeatIcon from 'material-ui-icons/Repeat';

import TweetCard from '../card/miniTweetCard';

import * as tweetTypes from '../../../../../../redux/data/constants/TweetType.js'

type Props = {
    classes: Object,
    data: Object,
};

const style = theme => ({
    root: {
        padding: '2px 5px',
    },
    info: {
        display: 'flex',
        margin: '4px 0px'
    },
    avatar: {
        width: '20px',
        height: '20px',
        margin: '0px 4px',
    },
    starIcon: {
        width: '20px',
        height: '20px',
        fill: '#E5BD3B',
        margin: '0px 4px'
    },
    repeatIcon: {
        width: '20px',
        height: '20px',
        fill: '#4EBD67',
        margin: '0px 4px'
    },
    card: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

const eventIcon = (type: string, likeclass: Object, rtclass: Object) => {
    return type === tweetTypes.likeEvent ? (<StarIcon className={likeclass} />) : (<RepeatIcon className={rtclass} />)
}

const eventContent = (type: string) => {
    return type === tweetTypes.likeEvent ? ' liked ' : ' retweeted ';
}

const normalTweet = (props: Props) => (
    <div className={props.classes.root}>
        <div className={props.classes.info}>
            {eventIcon(props.data.type, props.classes.starIcon, props.classes.repeatIcon)}
            <Avatar className={props.classes.avatar} src={props.data.sourceUser.avatar} />
            <Typography type="body1">
                {props.data.sourceUser.displayName + eventContent(props.data.type) + 'your tweet'}
            </Typography>
        </div>
        <div className={props.classes.card}>
            <TweetCard
                avatar={props.data.user.avatar}
                content={props.data.content} />
        </div>
    </div>
);

export default withStyles(style)(normalTweet);