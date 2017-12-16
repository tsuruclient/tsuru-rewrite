// @flow

import React from 'react'
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import Icon from '../buttons/Icon';
import AllButtons from '../buttons/allButtons';

type Props = {
    classes: Object,
    avatar: string,
    displayName: string,
    screenName: string,
    content: string,
};

const style = theme => ({
    root: {
        paddingBottom: '4px',
    },
    body: {
        padding: 5,
        paddingLeft: 53,
    },
});

const normalTweet = (props: Props) => (
    <div className={props.classes.root}>
        <li className={props.classes.body}>
            <Icon src={props.avatar}/>
            <Typography type="caption">{props.displayName + "@"+ props.screenName}</Typography>
            <Typography type="body1">{props.content}</Typography>
        </li>
        <AllButtons />
    </div>
);

export default withStyles(style)(normalTweet);