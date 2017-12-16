import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { snackbarActions } from '../redux/actions';
import Snackbar from '../component/MainView/Snackbar/Snackbar';

const mapStateToProps = (state) => ({
    data: state.snackbar
});

const mapDispatchToProps = (dispatch) => ({
    closeSnackbar: bindActionCreators(snackbarActions.closeSnackbar, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);
