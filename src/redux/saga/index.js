// @flow
import { put, call, takeEvery } from 'redux-saga/effects';
import * as types from '../constant';
import * as storageApis from '../api/storage';

import pinAuthorization from './authorization';
import { getRequest, postRequest } from './api';
// import debug from './debug';

import Services from '../data/constants/services';
import Account from '../data/objects/Account';
import Timeline from '../data/objects/Timeline';
import Client from '../data/client/general';
import Mstdn from '../data/client/mstdn';

function* loadApplicationData(): any {
    try {
        const loadedData = yield call(storageApis.load);
        try {
            const Accounts = loadedData.accounts.map(((item: any): Account => {
                const c = item.service === Services.Mastodon ? new Mstdn(item.consumerKey, item.domain, item.token) : new Client(item.service, item.consumerKey, item.domain, item.token);
                return new Account(item.service, c, true, item.userData);
            }));
            yield put({ type: types.LOAD_ACCOUNT_DATA_SUCCESSED, accounts: Accounts });
        } catch (e) {
            throw e;
        }
        try {
            const Timelines = loadedData.timelines.map((item: any): Timeline => (new Timeline(item.ownerIndex, item.timelineType)));
            yield put({ type: types.LOAD_TIMELINE_DATA_SUCCESSED, timelines: Timelines });
        } catch (e) {
            throw e;
        }
        // yield put({ type: types.SET_DEBUG_DATA });
    } catch (e) {
        yield put({ type: types.LOAD_DATA_FAILED, error: e });
    }
}

function* rootSaga(): any {
    // yield takeEvery(types.SET_DEBUG_DATA, debug);
    yield takeEvery(types.REQUEST_LOAD_APPLICATION_DATA, loadApplicationData);
    yield takeEvery(types.REQUEST_PIN_AUTHORIZATION, pinAuthorization);
    yield takeEvery(types.REQUEST_GET_API, getRequest);
    yield takeEvery(types.REQUEST_POST_API, postRequest);
}

export default rootSaga;
