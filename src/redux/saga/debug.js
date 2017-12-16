// @flow

import { put } from 'redux-saga/effects';
import * as types from '../constant';
import Services from '../data/constants/services';
import * as dataTypes from '../data/constants/dataType';
import data from '../../testData/pawoonet_notification.json';

export default function* setTestData(action: Object): any {
    try {
        const Data = data;
        yield put({ type: types.ADD_TIMELINE, payload: {
            accountIndex: 1,
            timelineTypeIndex: 1,
        }});

        yield put({ type: types.TIMELINE_GET_SUCCESSED,
            accountIndex: 1,
            service: Services.Mastodon,
            dataType: dataTypes.activity,
            data: Data,
        });
    } catch(e) {
        console.warn('something went wrong?????????????????????????????????????')
    }
}
