// @flow

import { put, call } from 'redux-saga/effects';
import * as types from '../constant';
import * as api from '../data/entity/Apis';

export function* getRequest(action: Object): any {
    const { accountIndex, dataType, client, apiPath, payload } = action.payload;
    try {
        const data = yield call((): Promise<any> => (client.get(apiPath, payload)));
        yield put({
            type: types.TIMELINE_GET_SUCCESSED,
            accountIndex,
            service: client.type,
            dataType,
            data,
        });
    } catch (error) {
        yield put({ type: types.API_CALL_FAILED, error });
    }
}

export function* postRequest(action: Object): any {
    const { timelineIndex, client, apiPath, service, payload } = action.payload;
    try {
        yield call((): Promise<any> => (client.post(apiPath[service], payload)));
        switch (apiPath) {
        case api.post.statuses.update:
            yield put({ type: types.POST_TWEET_SUCCESSED, tlIndex: timelineIndex });
            break;
        default:
            yield put({ type: types.TIMELINE_POST_SUCCESSED });
            break;
        }
    } catch (error) {
        switch (apiPath) {
        case api.post.statuses.update:
            yield put({ type: types.POST_TWEET_FAILED, tlIndex: timelineIndex, error });
            break;
        default:
            yield put({ type: types.API_CALL_FAILED, error });
            break;
        }
    }
}
