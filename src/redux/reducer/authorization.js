// @flow

import { handleActions } from 'redux-actions';
import * as types from '../constant';
import * as authApis from '../api/auth';
import Account from '../data/objects/Account';

const initState = {};

export default handleActions({
    [types.OPEN_PIN_AUTHORIZATION_WINDOW]: (state: Object, action: Object): Object => (
        new Account(action.payload.type, authApis.openPinAuthWindow(action.payload), false)
    ),
    [types.PIN_AUTHORIZATION_CANCELED]: (state: Object): Object => ({}),
}, initState);
