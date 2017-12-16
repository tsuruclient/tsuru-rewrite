import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { DialogActions,
    DialogContent,
    DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

const styles = () => ({
    root: {
        
    },
});

class InputPinView extends React.Component {
    state = {
        pin: '',
        err: false,
    }

    handleAuthClick = () => {
        this.setState({ err: false });
        if (this.state.pin.trim() !== '') {
            this.props.requestPinAuth(this.state.pin);
        } else {
            this.setState({ err: true })
        }
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <DialogTitle>{"Activate Account"}</DialogTitle>
                <DialogContent>
                    <TextField
                        value={this.state.pin}
                        onChange={event => this.setState({pin: event.target.value})}
                        id="insert-pin"
                        label="Input PIN Here..."
                        margin="normal"
                        error={this.state.err}
                        fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button raised onTouchTap={this.props.cancel}>
                        {"Cancel"}
                    </Button>
                    <Button raised color="primary" onClick={this.handleAuthClick}>
                        {"Activate"}
                    </Button>
                </DialogActions>
            </div>
        )
    }
}

export default withStyles(styles)(InputPinView);
