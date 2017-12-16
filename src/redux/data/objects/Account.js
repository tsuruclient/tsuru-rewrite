// @flow
import User from './User';
import type Client from '../client/general';
import type Mstdn from '../client/mstdn';

type clients = Client | Mstdn;

export default class Account {
    service: string;
    client: clients;
    user: ?User;
    isValid: boolean;

    constructor(service: string, client: clients, isValid: boolean, userData: ?Object) {
        this.service = service;
        this.client = client;
        if (userData) this.user = new User(this.service, userData);
        this.isValid = isValid;
    }

    confirm(data: Object) {
        this.user = new User(this.service, data);
        this.isValid = true;
    }

    export(): Object {
        return {
            service: this.service,
            consumerKey: this.client.exportConsumerKey(),
            token: this.client.exportToken(),
            domain: this.client.domain,
            userData: this.user.origin,
        };
    }
}
