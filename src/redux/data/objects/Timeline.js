// @flow

import { copyInstance } from '../../../helper';

export default class Timeline {
    ownerIndex: number;
    timelineType: string;
    filtering: Object; // TODO: 頼む
    tweetBox: string;
    image: Array<any>; // TODO: よくわからん
    error: string;

    constructor(ownerIndex: number, timelineType: string) {
        this.ownerIndex = ownerIndex;
        this.timelineType = timelineType;
        this.filtering = {};
        this.tweetBox = '';
    }

    tweetBoxUpdate(value: string): Timeline {
        const r = copyInstance(this);
        r.tweetBox = value;
        return r;
    }

    filterling(data: Array<any>): Array<any> {
        // TODO: フィルタリングをどうにかしてやってほしい
        return data;
    }
    
    clear(): Timeline {
        const r = copyInstance(this);
        r.tweetBox = '';
        r.image = [];
        return r;
    }

    export(): Object {
        return {
            ownerIndex: this.ownerIndex,
            timelineType: this.timelineType,
            filterling: this.filtering,
        };
    }
}
