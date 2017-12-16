// @flow
import Services from '../constants/services';

/* --コピペ用--
    {
        [Services.Twitter]: '',
        [Services.GnuSocial]: '',
        [Services.Mastodon]: '',
    },
*/

export const Account = {
    displayName: {
        [Services.Twitter]: 'name',
        [Services.GnuSocial]: 'name',
        [Services.Mastodon]: 'display_name',
    },
    screenName: {
        [Services.Twitter]: 'screen_name',
        [Services.GnuSocial]: 'screen_name',
        [Services.Mastodon]: 'acct',
    },
    id: {
        [Services.Twitter]: 'id_str',
        [Services.GnuSocial]: 'id',
        [Services.Mastodon]: 'id',
    },
    icon: {
        [Services.Twitter]: 'profile_image_url_https',
        [Services.GnuSocial]: 'profile_image_url_https',
        [Services.Mastodon]: 'avatar',
    },
    header: {
        [Services.Twitter]: 'profile_banner_url',
        [Services.GnuSocial]: 'profile_banner_url',
        [Services.Mastodon]: 'header',
    },
    protected: {
        [Services.Twitter]: 'protected',
        [Services.GnuSocial]: '',
        [Services.Mastodon]: 'locked',
    },
};

export const Content = {
    id: {
        [Services.Twitter]: 'id_str',
        [Services.GnuSocial]: 'id',
        [Services.Mastodon]: 'id',
    },
    text: {
        [Services.Twitter]: 'text',
        [Services.GnuSocial]: 'text',
        [Services.Mastodon]: 'content',
    },
    user: {
        [Services.Twitter]: 'user',
        [Services.GnuSocial]: 'user',
        [Services.Mastodon]: 'account',
    },
    retweetedTweet: {
        [Services.Twitter]: 'retweeted_status',
        [Services.GnuSocial]: 'retweeted_status',
        [Services.Mastodon]: 'reblog',
    },
    inReplyToId: {
        [Services.Twitter]: 'in_reply_to_status_id_str',
        [Services.GnuSocial]: 'in_reply_to_status_id',
        [Services.Mastodon]: 'in_reply_to_id',
    },
    inReplyToAccountId: {
        [Services.Twitter]: 'in_reply_to_user_id_str',
        [Services.GnuSocial]: 'in_reply_to_user_id',
        [Services.Mastodon]: 'in_reply_to_account_id',
    },
};

export const Notice = {
    type: {
        [Services.Twitter]: '',
        [Services.GnuSocial]: '',
        [Services.Mastodon]: 'type',
    },
    id: {
        [Services.Twitter]: '',
        [Services.GnuSocial]: '',
        [Services.Mastodon]: 'id',
    },
    createdAt: {
        [Services.Twitter]: '',
        [Services.GnuSocial]: '',
        [Services.Mastodon]: 'created_at',
    },
    target: {
        [Services.Twitter]: '',
        [Services.GnuSocial]: '',
        [Services.Mastodon]: 'status',
    },
    sender: {
        [Services.Twitter]: '',
        [Services.GnuSocial]: '',
        [Services.Mastodon]: 'account',
    },
};
