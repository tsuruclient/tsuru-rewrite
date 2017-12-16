// @flow

import React from 'react'
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import PersonAddIcon from 'material-ui-icons/PersonAdd';

import AccountCard from '../card/accountCard';

type Props = {
    classes: Object,
    user: Object
};

const style = theme => ({
    root: {
        padding: '2px 5px',
    },
    info: {
        display: 'flex',
    },
    icon: {
        width: '20px',
        height: '20px',
        fill: '#49A4EF',
        margin: '0px 4px'
    },
    card: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

const normalTweet = (props: Props) => (
    <div className={props.classes.root}>
        <div className={props.classes.info}>
            <PersonAddIcon className={props.classes.icon} />
            <Typography type="body1">
                {props.user.displayName + ' followed you'}
            </Typography>
        </div>
        <div className={props.classes.card}>
            <AccountCard
                user={props.user} />
        </div>
    </div>
);

export default withStyles(style)(normalTweet);