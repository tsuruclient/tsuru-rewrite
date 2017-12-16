// @flow

import React from 'react';
import { withStyles } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

type Props = {
    data: Object,
    closeSnackbar: Function,
}

const styles = theme => ({

});

const validationErrorMessage = (message) => {
    if(!message){
        return null;
    } else {
        return message.statusCode + ": " + JSON.stringify(message.data);
    }
}

const NotificationSnackbar = (props: Props) => (
    <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left',}}
        open={props.data.open}
        autoHideDuration={6000}
        onRequestClose={props.data.closeSnackbar}
        SnackbarContentProps={{
            'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{validationErrorMessage(props.data.message)}</span>}
        action={[
            <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={props.closeSnackbar}>
                <CloseIcon />
            </IconButton>,
        ]}
    />
)

export default withStyles(styles)(NotificationSnackbar);
