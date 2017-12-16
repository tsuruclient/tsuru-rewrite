// @flow

import { Account } from '../entity/Entities';

export default class User {
    origin: Object;

    service: string;
    instance: string;

    displayName: string;
    screenName: string;
    id: string;

    avatar: string;
    header: string;

    bio: string;
    url: string;
    isLocked: boolean;

    constructor(service: string, userData: Object) {
        this.origin = userData;
        this.service = service;

        this.displayName = userData[Account.displayName[this.service]];
        this.screenName = userData[Account.screenName[this.service]];
        this.id = userData[Account.id[this.service]];

        this.isLocked = userData[Account.protected[this.service]];

        this.avatar = userData[Account.icon[this.service]];
        this.header = userData[Account.header[this.service]];
        // TODO: BIO, URL, ISLOCKED IS HERE
    }
}
