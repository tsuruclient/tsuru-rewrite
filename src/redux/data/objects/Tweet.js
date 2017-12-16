// @flow
import Services from '../constants/services';
import { Content, Notice } from '../entity/Entities';
import User from './User';
import * as dataTypes from '../constants/dataType';
import * as tweetTypes from '../constants/TweetType';
import eventTypes from '../entity/eventType';

export default class Tweet {
    service: string;
    instance: ?string;
    type: string;

    id: string | number;
    user: User;
    content: string;

    sourceUser: ?User;

    target: ?Tweet;
    targetId: ?string | number;

    inReplyToId: ?string;
    inReplyToAccountId: ?string;
    inReplyToScreenName: ?string;

    retweetCount: number;
    favoriteCount: number;

    retweeted: boolean;
    favorited: boolean;

    parse(status: Object) {
        this.id = status[Content.id[this.service]];
        this.user = new User(this.service, status[Content.user[this.service]]);
        this.content = status[Content.text[this.service]].replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
        this.inReplyToId = status[Content.inReplyToId[this.service]];
        this.inReplyToAccountId = status[Content.inReplyToAccountId[this.service]];
    }

    parsingTargetStatus(status: Object) {
        this.targetId = status[Content.id[this.service]];
        this.user = new User(this.service, status[Content.user[this.service]]);
        this.content = status[Content.text[this.service]].replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
        this.inReplyToId = status[Content.inReplyToId[this.service]];
        this.inReplyToAccountId = status[Content.inReplyToAccountId[this.service]];
        
    }

    constructor(service: string, dataType: string, data: Object) {
        this.service = service;

        switch (dataType) {
        case dataTypes.streaming:
            //TODO: とぅーどぅー
            break;
        case dataTypes.home:
            this.parse(data);
            if (data[Content.retweetedTweet[this.service]]) {
                this.type = tweetTypes.retweeted;
                this.target = new Tweet(this.service, dataTypes.home, data[Content.retweetedTweet[this.service]]);
            } else {
                this.type = tweetTypes.normal;
            }
            break;
        case dataTypes.activity:
            this.id = data[Content.id[this.service]];
            if (service === Services.Mastodon) {
                switch (data[Notice.type[this.service]]) {
                case eventTypes.mention[this.service]:
                    this.type = tweetTypes.normal;
                    this.sourceUser = new User(this.service, data[Content.user[this.service]]);
                    this.parsingTargetStatus(data[Notice.target[this.service]]);
                    break;
                case eventTypes.retweet[this.service]:
                    this.type = tweetTypes.rtEvent;
                    this.sourceUser = new User(this.service, data[Content.user[this.service]]);
                    this.parsingTargetStatus(data[Notice.target[this.service]]);
                    break;
                case eventTypes.fav[this.service]:
                    this.type = tweetTypes.likeEvent;
                    this.sourceUser = new User(this.service, data[Content.user[this.service]]);
                    this.parsingTargetStatus(data[Notice.target[this.service]]);
                    break;
                case eventTypes.follow[this.service]:
                    this.sourceUser = new User(this.service, data[Content.user[this.service]]);
                    this.type = tweetTypes.followEvent;
                    break;
                default:
                    this.type = tweetTypes.unsolved;
                    break;
                }
            } else {
                this.type = tweetTypes.normal;
                this.parse(data);
            }
            break;
        default:
            this.type = tweetTypes.unsolved;
            break;
        }
    }
}
