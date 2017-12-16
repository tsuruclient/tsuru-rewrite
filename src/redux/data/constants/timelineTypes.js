import * as apis from '../entity/Apis';
import * as dataType from './dataType';

export default {
    Home: {
        description: 'Home Timeline',
        api: apis.get.statuses.home_timeline,
        dataname: dataType.home,
    },
    Activity: {
        description: 'Mentions and Reactions timeline.',
        api: apis.get.statuses.mentions_timeline,
        dataname: dataType.activity,
    },
    /* 'Direct Message': {
        description: 'Direct message timeline.',
        api: apis.get.statuses.mentions_timeline,
        dataname: dataType.directMail,
    },*/
};
