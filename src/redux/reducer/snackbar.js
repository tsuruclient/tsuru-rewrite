// @flow

import { handleActions } from 'redux-actions';
import * as types from '../constant';

const initState = {
    open: false,
    message: null
};

export default handleActions({
    [types.POST_TWEET_FAILED]: (state: Object, action: Object): Object => (
        {open: true, message: action.error}
    ),
    [types.API_CALL_FAILED]: (state: Object, action: Object): Object => (
        {open: true, message: action.error}
    ),
    [types.CLOSE_SNACKBAR]: (state: Object, action: Object): Object => (
        {open: false, message: null}
    ),
}, initState);
