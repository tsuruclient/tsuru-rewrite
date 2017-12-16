// @flow

import { copyInstance } from '../../../helper';
import Tweet from '../objects/Tweet';
import * as dataTypes from '../constants/dataType';

export default class TweetData {
    home: Array<any>;
    activity: Array<any>;
    directMail: Array<any>;

    constructor() {
        this.home = [];
        this.activity = [];
        this.directMail = [];
    }

    unshiftHomeArray(data: Array<any>, service: string): TweetData {
        const shaped = data.map((value: Object): Tweet => (new Tweet(service, dataTypes.home, value)));
        const r = copyInstance(this);
        r.home = Object.assign([], this.home);
        r.home.unshift(...shaped);
        return r;
    }

    unshiftActivityArray(data: Array<Object>, service: string): TweetData {
        const shaped = data.map((value: Object): Tweet => (new Tweet(service, dataTypes.activity, value)));
        const r = copyInstance(this);
        r.activity = Object.assign([], this.activity);
        r.activity.unshift(...shaped);
        return r;
    }

    unshiftDMArray(data: Array<Object>, service: string): TweetData {
        const r = copyInstance(this);
        r.directMail = Object.assign([], this.directMail);
        // r.directMail.unshift(...data); // TODO
        return r;
    }

    unshift(dataType: string, data: Array<Object>, service: string): TweetData {
        switch (dataType) {
        case dataTypes.home:
            return this.unshiftHomeArray(data, service);
        case dataTypes.activity:
            return this.unshiftActivityArray(data, service);
        default:
            return this;
        }
    }

    /* // TODO: やって
    unshiftStreamingData(): TweetData {
        
    }*/
}
