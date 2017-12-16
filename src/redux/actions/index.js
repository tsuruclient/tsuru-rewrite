// @flow

import { createActions } from 'redux-actions';
import * as types from '../constant';

export const debugActions = createActions(types.SET_DEBUG_DATA);

// ----- component-manage types -----
export const dialogActions = createActions(
    types.OPEN_ADD_ACCOUNT_DIALOG,
    types.SELECT_INSTANCE,
    types.FORWARD_INPUT_DATA_SECTION,
    types.FORWARD_PIN_AUTHORIZATION_SECTION,
    types.BACK_SECTION,
    types.RECEIVE_PIN_ERROR,
    types.CLOSE_ADD_ACCOUNT_DIALOG,
);

// ----- contents types -----
export const generalActions = createActions(
    types.APPLICATION_STARTED,
    types.REQUEST_LOAD_APPLICATION_DATA,
    types.LOAD_ACCOUNT_DATA_SUCCESSED,
    types.LOAD_TIMELINE_DATA_SUCCESSED,
    types.LOAD_DATA_FAILED,
);

export const accountActions = createActions(
    types.OPEN_PIN_AUTHORIZATION_WINDOW,
    types.REQUEST_PIN_AUTHORIZATION,
    types.PIN_AUTHORIZATION_CANCELED,
    types.AUTHORIZATION_SUCCESSED,
    types.DELETE_ACCOUNT,
    types.UPDATE_ACCOUNT_DATA,
);

export const timelineActions = createActions(
    types.ADD_TIMELINE,
    types.DELETE_TIMELINE,
    types.MOVE_TIMELINE,
    types.UPDATE_TWEET_BOX,
    types.POST_TWEET_SUCCESSED,
);

export const apiActions = createActions(
    {
        [types.REQUEST_GET_API]: (accountIndex: number, dataType: string, client: any, apiPath: string, payload: Object): Object => ({
            accountIndex,
            dataType,
            client,
            apiPath,
            payload,
        }),
        [types.REQUEST_POST_API]: (timelineIndex: number, client: any, apiPath: string, service: string, payload: Object): Object => ({
            timelineIndex,
            client,
            apiPath,
            service,
            payload,
        }),
    },
    types.TIMELINE_GET_SUCCESSED,
    types.TIMELINE_POST_SUCCESSED,
);

export const snackbarActions = createActions(
    types.POST_TWEET_FAILED,
    types.API_CALL_FAILED,
    types.CLOSE_SNACKBAR,
    types.CLOSE_ALL_SNACKBAR,
);
