import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Dialog from 'material-ui/Dialog';

import SelectAccountTypeView from './SelectAccountTypeView';
import InputInstanceDataView from './InputInstanceDataView';
import InputPinView from './InputPinView';

const styles = theme => ({
    root: {

    },
});

const AddAccountDialog = (props) => (
    <Dialog
        open={props.open}
        onRequestClose={props.step !== 2 ? props.close : null}>
        <div className={props.classes.root}>
            {[
                <SelectAccountTypeView
                    select={props.select}
                    selected={props.selected}
                    forwardInputDataSection={props.forwardInputDataSection}
                    forwardPinSection={props.forwardPinAuthSection}
                    startAuth={props.openPinWindow} />,
                <InputInstanceDataView
                    forwardPinSection={props.forwardPinAuthSection}
                    selected={props.selected}
                    backward={props.backSection}
                    startAuth={props.openPinWindow} />,
                <InputPinView
                    requestPinAuth={props.requestPinAuth}
                    cancel={props.close}/>
            ][props.step]}
        </div>
    </Dialog>
)

export default withStyles(styles)(AddAccountDialog);
