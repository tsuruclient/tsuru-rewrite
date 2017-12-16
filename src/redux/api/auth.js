// @flow
import * as apis from '../data/entity/Apis';
import Client from '../data/client/general';
import Mstdn from '../data/client/mstdn';
import Services from '../data/constants/services';

export function openPinAuthWindow(status: Object): Client | Mstdn {
    const client: Mstdn | Client = status.type === Services.Mastodon ?
        new Mstdn(
            {
                consumerKey: status.apikey,
                consumerSecret: status.apisecret,
            },
            status.instance,
        ) :
        new Client(
            status.type,
            {
                consumerKey: status.apikey,
                consumerSecret: status.apisecret,
            },
            status.instance,
            null,
        );
    client.openAuthorizationWindow();
    return client;
}

export function getOAuthAccessToken(client: Client | Mstdn, pin: string): Promise<any> {
    return client.activate(pin);
}

export function confirmAccount(client: Client | Mstdn): Object {
    return client.get(apis.get.account.verify_credentials[client.type], {});
}
