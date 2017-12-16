// @flow

import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

type Props = {
    classes: Object,
    user: Object,
}

const styles = theme => ({
    root: {
        width: '260px',
        height: '100px',
        position: 'relative',
        margin: '4px'
    },
    info: {
        width: '100%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10px',
    },
    text: {
        background: 'rgba(255, 255, 255, 0.7)',
        minWidth: '80px',
        padding: '4px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

const imageStyle = (header: string): any => (
    {
        background: 'url(' + header + ')',
        backgroundSize: 'cover',
        width: '100%',
        height: '100px',
        position: 'absolute',
    }
)

const miniAccountInfo = (props: Props) => {
    const { classes, user } = props;
    return (
        <Paper className={classes.root}>
            <div style={imageStyle(user.header)} />
            <div className={classes.info}>
                <Avatar className={classes.avatar} src={user.avatar} />
                <div className={classes.text}>
                    <Typography type={"body1"}>{user.displayName}</Typography>
                    <Typography type={'caption'}>{user.screenName}</Typography>
                </div>
            </div>
        </Paper>
    )
}

export default withStyles(styles)(miniAccountInfo);