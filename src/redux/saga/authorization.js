// @flow

import { put, call, select } from 'redux-saga/effects';
import * as types from '../constant';
import Account from '../data/objects/Account';
import * as storageApis from '../api/storage';
import * as authApis from '../api/auth';

export default function* pinAuthorization(action: Object): any {
    try {
        const target: Account = yield select((state: any): any => state.authorization);
        target.client = yield call(authApis.getOAuthAccessToken, target.client, action.payload);
        target.confirm(yield call(authApis.confirmAccount, target.client));
        yield put({ type: types.AUTHORIZATION_SUCCESSED, payload: target });
        yield put({ type: types.CLOSE_ADD_ACCOUNT_DIALOG });
        yield call(storageApis.saveAccounts, yield select((state: any): Array<Account> => (state.account).map((item: Object): Account => (item.account))));
    } catch (error) {
        yield put({ type: types.RECEIVE_PIN_ERROR, error });
    }
}
