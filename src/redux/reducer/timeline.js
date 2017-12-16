// @flow

import { handleActions } from 'redux-actions';
import * as types from '../constant';
import Timeline from '../data/objects/Timeline';
import { saveTimelines } from '../api/storage';

const initState = [];

export default handleActions({
    [types.UPDATE_TWEET_BOX]: (state: Array<any>, action: Object): Array<any> => (
        state.map((value: Timeline, index: number): Timeline => (index === action.payload.tlIndex ? value.tweetBoxUpdate(action.payload.value) : value))
    ),
    [types.POST_TWEET_SUCCESSED]: (state: Array<any>, action: Object): Array<any> => (
        state.map((value: Timeline, index: number): Timeline => (index === action.tlIndex ? value.clear() : value))
    ),
    [types.ADD_TIMELINE]: (state: Array<any>, action: Object): Array<any> => {
        const nextState = [...state, new Timeline(action.payload.accountIndex, action.payload.timelineTypeIndex)];
        saveTimelines(nextState);
        return nextState;
    },
    [types.DELETE_TIMELINE]: (state: Array<any>, action: Object): Array<any> => {
        const nextState = state.concat();
        nextState.splice(action.payload, 1);
        saveTimelines(nextState);
        return (nextState);
    },
    [types.LOAD_TIMELINE_DATA_SUCCESSED]: (state: Array<any>, action: Object): Array<any> => (
        action.timelines
    ),
}, initState);
