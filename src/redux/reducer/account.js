// @flow

import { handleActions } from 'redux-actions';
import * as types from '../constant';

import TweetData from '../data/objects/TweetData';

const initState = [];

export default handleActions({
    [types.TIMELINE_GET_SUCCESSED]: (state: Object, action: Object): Object => (
        Object.assign(
            [],
            state,
            state.map((value: Object, index: number): any => (
                index === action.accountIndex ?
                    {
                        account: value.account,
                        tweetData: value.tweetData.unshift(action.dataType, action.data, action.service),
                    } :
                    value)),
        )
    ),
    [types.LOAD_ACCOUNT_DATA_SUCCESSED]: (state: Object, action: Object): Object => (
        Object.assign([], state, action.accounts.map(item => ({ account: item, tweetData: new TweetData() })))
    ),
    [types.AUTHORIZATION_SUCCESSED]: (state: Object, action: Object): Object => (
        Object.assign([], state, [...state, { account: action.payload, tweetData: new TweetData() }])
    ),
}, initState);
