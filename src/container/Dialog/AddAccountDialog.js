import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dialogActions, accountActions } from '../../redux/actions';

import AddAccountDialog from '../../component/Dialog/AddAccountDialog/AddAccountDialog';

const mapStateToProps = (state) => ({
    open: state.dialog.AddAccountDialog.open,
    step: state.dialog.AddAccountDialog.step,
    selected: state.dialog.AddAccountDialog.selected,
});

const mapDispatchToProps = (dispatch) => ({
    select: bindActionCreators(dialogActions.selectInstance, dispatch),
    forwardInputDataSection: bindActionCreators(dialogActions.forwardInputDataSection, dispatch),
    forwardPinAuthSection: bindActionCreators(dialogActions.forwardPinAuthorizationSection, dispatch),
    backSection: bindActionCreators(dialogActions.backSection, dispatch),
    close: bindActionCreators(dialogActions.closeAddAccountDialog, dispatch),
    openPinWindow: bindActionCreators(accountActions.openPinAuthorizationWindow, dispatch),
    requestPinAuth: bindActionCreators(accountActions.requestPinAuthorization, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAccountDialog);
