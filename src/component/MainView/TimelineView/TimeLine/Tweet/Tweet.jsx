// @flow

import React from 'react';
import { withStyles } from 'material-ui/styles';

import * as tweetTypes from '../../../../../redux/data/constants/TweetType';

import NormalContent from './content/normal';
import RetweetedContent from './content/retweeted';
import FollowEventContent from './content/followEvent';
import LikeRtContent from './content/LikeRtEvent';

type Props = {
    classes: Object,
    data: Object,
};

const styles = theme => ({

});

const TimelineTweetBox = (props: Props) => {
    const { classes, data } = props;
    switch (data.type) {
    case tweetTypes.normal: 
        return (
            <NormalContent
                avatar={data.user.avatar}
                displayName={data.user.displayName}
                screenName={data.user.screenName}
                content={data.content} />
        )
    case tweetTypes.retweeted:
        return (
            <RetweetedContent
                avatar={data.target.user.avatar}
                displayName={data.target.user.displayName}
                screenName={data.target.user.screenName}
                content={data.target.content}
                sourceUserAvatar={data.user.avatar}
                sourceUserScreenName={data.user.screenName}/>
        )
    case tweetTypes.likeEvent:
    case tweetTypes.rtEvent:
        return (
            <LikeRtContent
                data={data} />
        )
    case tweetTypes.followEvent:
        return (
            <FollowEventContent
                user={data.sourceUser} />
        )
    default:
        console.warn('error: unknown tweet type.');
        console.log(data);
        return(
            <div></div>
        );
    };
}

export default withStyles(styles)(TimelineTweetBox);
