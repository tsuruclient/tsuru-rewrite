import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        userSelect: 'none',
    }
});

const Title = ({ classes, timelineName, account }) => (
    <div className={classes.root}>
        <Typography type="headline" style={{marginBottom: "-8px"}}>
            {timelineName}
        </Typography>
        <br />
        <Typography type="caption" style={{marginTop: "-8px"}}>
            {account.client.domain + "@" + account.user.screenName}
        </Typography>
    </div>
)

Title.propTypes = {
    classes: PropTypes.object.isRequired,
    timelineName: PropTypes.string.isRequired,
    account: PropTypes.object.isRequired
};

export default withStyles(styles)(Title);