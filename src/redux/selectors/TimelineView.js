// @flow

import { createSelector } from 'reselect';

const timelineList = (state: Object): Array<any> => (state.timeline);
const accountList = (state: Object): Array<any> => (state.account);
const tweetData = (state: Object): Array<any> => (state.account.map(item => item.tweetData));

export const tweetBoxText = createSelector(
    [timelineList],
    (Timeline: Array<any>): any => (
        (index: number): any => (
            Timeline[index].tweetBox)),
);

export const tweets = createSelector(
    [accountList],
    (Accounts: Array<any>): any => (
        (index: number, type: string): any => (
            Accounts[index].tweetData[type])),
);

export const account = createSelector(
    [accountList],
    (Accounts: Array<any>): any => (
        (index: number): any => (
            Accounts[index].account)),
);

export const latestItem = createSelector(
    [tweetData],
    (Data: Array<any>): any => (
        (accountIndex: number, timelineType: string): any => (
            Data[accountIndex][timelineType][0])),
);
