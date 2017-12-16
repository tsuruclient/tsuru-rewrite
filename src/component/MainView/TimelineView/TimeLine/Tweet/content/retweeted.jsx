// @flow

import React from 'react'
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import Icon from '../buttons/Icon';
import RepeatIcon from 'material-ui-icons/Repeat';

type Props = {
    classes: Object,
    avatar: string,
    displayName: string,
    screenName: string,
    content: string,
    sourceUserAvatar: string,
    sourceUserScreenName: string,
};

const style = (theme: Object): Object => ({
    root: {
    },
    header: {
        margin: '4px 0px',
        display: 'flex',
    },
    repeatIcon: {
        width: '20px',
        height: '20px',
        fill: '#4EBD67',
        margin: '0px 4px'
    },
    body: {
        padding: 5,
        paddingLeft: 53,
        minHeight: 60,
    }
});

const normalTweet = (props: Props) => (
    <div className={props.classes.root}>
        <div className={props.classes.header}>
            <RepeatIcon className={props.classes.repeatIcon} />
            <Typography type="body1">{props.sourceUserScreenName + ' retweeted'}</Typography>
        </div>
        <li className={props.classes.body}>
            <Icon src={props.avatar}/>
            <Typography type="caption">{props.displayName + "@"+ props.screenName}</Typography>
            <Typography type="body1">{props.content}</Typography>
        </li>
    </div>
);

export default withStyles(style)(normalTweet);