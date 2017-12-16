// @flow
import { combineReducers } from 'redux';
import dialog from './dialog';
import account from './account';
import timeline from './timeline';
import authorization from './authorization';
import snackbar from './snackbar';

export default combineReducers({
    dialog,
    account,
    timeline,
    authorization,
    snackbar,
});
