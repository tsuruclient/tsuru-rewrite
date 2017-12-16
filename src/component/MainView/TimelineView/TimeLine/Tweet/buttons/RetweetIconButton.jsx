import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

const styles = {
    root: {
    }
};

class RetweetIconButton extends React.Component {
    render() {
        return (
            <IconButton>
            </IconButton>
        )
    }
}

RetweetIconButton.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RetweetIconButton);