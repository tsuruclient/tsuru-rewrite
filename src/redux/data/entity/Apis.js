// @flow
import Services from '../constants/services';

export const oauth = {
    request_token: {
        [Services.Twitter]: 'oauth/request_token',
        [Services.GnuSocial]: 'api/oauth/request_token',
    },
    access_token: {
        [Services.Twitter]: 'oauth/access_token',
        [Services.GnuSocial]: 'api/oauth/access_token',
    },
    authorize: {
        [Services.Twitter]: 'oauth/authorize',
        [Services.GnuSocial]: 'api/oauth/authorize',
    },
};

export const get = {
    statuses: {
        home_timeline: {
            [Services.Twitter]: '1.1/statuses/home_timeline.json',
            [Services.GnuSocial]: 'api/statuses/home_timeline.json',
            [Services.Mastodon]: '/api/v1/timelines/home',
        },
        user_timeline: {
            [Services.Twitter]: '1.1/statuses/user_timeline.json',
            [Services.GnuSocial]: 'api/statuses/user_timeline.json',
            [Services.Mastodon]: '', // ISSUE: Mastodonの場合ユーザーIDを「挟む」形になるので要検討。関数を返すのが正当か。その場合はuser_timeline自体すべてが関数になる必要がある。
        },
        mentions_timeline: {
            [Services.Twitter]: '1.1/statuses/mentions_timeline.json',
            [Services.GnuSocial]: 'api/statuses/mentions.json',
            [Services.Mastodon]: 'api/v1/notifications',
        },
    },
    account: {
        verify_credentials: {
            [Services.Twitter]: '1.1/account/verify_credentials.json',
            [Services.GnuSocial]: 'api/account/verify_credentials.json',
            [Services.Mastodon]: 'api/v1/accounts/verify_credentials',
        },
    },
};

export const post = {
    statuses: {
        update: {
            [Services.Twitter]: '1.1/statuses/update.json',
            [Services.GnuSocial]: 'api/statuses/update.json',
            [Services.Mastodon]: 'api/v1/statuses',
        },
    },
};
