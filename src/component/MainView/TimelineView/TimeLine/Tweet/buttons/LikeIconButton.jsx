import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/FavoriteBorder';

const styles = {
    button: {
        width: 20,
        height: 20
    },
    root: {
        width: 18,
        height: 18
    }
};

class LikeIconButton extends React.Component {
    render() {
        return (
            <IconButton className={this.props.classes.button} aria-label="Like" disableRipple={true}>
                <FavoriteIcon className={this.props.classes.root}/>
            </IconButton>
        )
    }
}

LikeIconButton.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LikeIconButton);