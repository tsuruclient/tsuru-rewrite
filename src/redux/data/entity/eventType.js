// @flow

import Services from '../constants/services';

export default {
    mention: {
        [Services.Twitter]: undefined,
        [Services.GnuSocial]: undefined,
        [Services.Mastodon]: 'mention',
    },
    retweet: {
        [Services.Twitter]: '',
        [Services.GnuSocial]: '',
        [Services.Mastodon]: 'reblog',
    },
    fav: {
        [Services.Twitter]: 'favorite',
        [Services.GnuSocial]: '',
        [Services.Mastodon]: 'favourite',
    },
    follow: {
        [Services.Twitter]: 'follow',
        [Services.GnuSocial]: '',
        [Services.Mastodon]: 'follow',
    },
};
