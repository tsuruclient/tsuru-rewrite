// @flow

import { handleActions } from 'redux-actions';
import * as types from '../constant';

const initState = {
    AddAccountDialog: {
        step: 0,
        open: false,
        selected: 2,
        receivedError: false,
    },
};

export default handleActions({
    [types.OPEN_ADD_ACCOUNT_DIALOG]: (state: Object): Object => (
        Object.assign({}, state, { AddAccountDialog: { open: true, step: 0, selected: 2 } })
    ),
    [types.SELECT_INSTANCE]: (state: Object, action: Object): Object => (
        Object.assign({}, state, { AddAccountDialog: { open: true, step: 0, selected: action.payload } })
    ),
    [types.CLOSE_ADD_ACCOUNT_DIALOG]: (state: Object): Object => (
        Object.assign({}, state, { AddAccountDialog: { open: false, step: state.AddAccountDialog.step, selected: state.AddAccountDialog.selected } })
    ),
    [types.FORWARD_INPUT_DATA_SECTION]: (state: Object): Object => (
        Object.assign({}, state, { AddAccountDialog: { open: true, step: 1, selected: state.AddAccountDialog.selected } })
    ),
    [types.FORWARD_PIN_AUTHORIZATION_SECTION]: (state: Object): Object => (
        Object.assign({}, state, { AddAccountDialog: { open: true, step: 2, selected: state.AddAccountDialog.selected, receivedError: false } })
    ),
    [types.RECEIVE_PIN_ERROR]: (state: Object): Object => (
        Object.assign({}, state, { AddAccountDialog: { open: true, step: 2, selected: state.AddAccountDialog.selected, receivedError: true } })
    ),
    [types.BACK_SECTION]: (state: Object): Object => (
        Object.assign(
            {},
            state,
            {
                AddAccountDialog: {
                    open: true,
                    step: state.AddAccountDialog.step <= 0 ? 0 : state.AddAccountDialog.step - 1,
                    selected: state.AddAccountDialog.selected,
                },
            },
        )
    ),
}, initState);
