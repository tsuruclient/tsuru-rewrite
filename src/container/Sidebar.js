import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dialogActions, timelineActions } from '../redux/actions';
import Sidebar from '../component/MainView/Sidebar/Sidebar';

const mapStateToProps = (state) => ({
    accounts: state.account,
});

const mapDispatchToProps = (dispatch) => ({
    openAddAccountDialog: bindActionCreators(dialogActions.openAddAccountDialog, dispatch),
    addTimeline: bindActionCreators(timelineActions.addTimeline, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
