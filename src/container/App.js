import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { generalActions, debugActions } from '../redux/actions';
import App from '../component/App';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    load: bindActionCreators(generalActions.requestLoadApplicationData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
