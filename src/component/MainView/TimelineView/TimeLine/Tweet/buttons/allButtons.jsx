import React from 'react';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

import ReplyIcon from 'material-ui-icons/Reply';
import FavoriteIcon from 'material-ui-icons/FavoriteBorder';
import RepeatIcon from 'material-ui-icons/Repeat';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        width: 20,
        height: 20,
    },
    icon: {
        width: 18,
        height: 18,
    },
};

class allButtons extends React.Component {
    render() {
        return (
            <div className={this.props.classes.root}>
                <IconButton className={this.props.classes.button} aria-label="Reply" disableRipple={true}>
                    <ReplyIcon className={this.props.classes.icon}/>
                </IconButton>
                <IconButton className={this.props.classes.button} aria-label="Fav" disableRipple={true}>
                    <RepeatIcon className={this.props.classes.icon}/>
                </IconButton>
                <IconButton className={this.props.classes.button} aria-label="RT" disableRipple={true}>
                    <FavoriteIcon className={this.props.classes.icon}/>
                </IconButton>
            </div>
        );
    }
}

export default withStyles(styles)(allButtons);