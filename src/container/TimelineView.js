// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { apiActions, timelineActions } from '../redux/actions';
import TimelineView from '../component/MainView/TimelineView/TimelineView';
import { tweetBoxText, tweets, account, latestItem } from '../redux/selectors/TimelineView';

const mapStateToProps = (state: Object): any => ({
    timelines: state.timeline,
    timelineTextBox: tweetBoxText(state),
    tweets: tweets(state),
    account: account(state),
    latestItem: latestItem(state),
});

const mapDispatchToProps = (dispatch: any): any => ({
    getRequest: bindActionCreators(apiActions.requestGetApi, dispatch),
    postRequest: bindActionCreators(apiActions.requestPostApi, dispatch),
    updateTweetBox: bindActionCreators(timelineActions.updateTweetBox, dispatch),
    deleteTimeline: bindActionCreators(timelineActions.deleteTimeline, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineView);
