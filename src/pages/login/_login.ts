import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import Login from './Login';
import { reduxForm } from 'redux-form';
import { login } from '../../redux/auth/creators';
import { AuthState } from '../../redux/auth/interface';

export interface OwnOptionalProps {
  handleSubmit: any;
}

export interface OwnProps extends Partial<OwnOptionalProps> { }

export interface StateProps {
  auth: AuthState;
}

export interface DispatchProps {
  login: (user: any) => Function;
}

export interface OwnProps { }

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      auth: state.auth
    };
  },
  {
    login,
  },
)(reduxForm({
  form: 'login',
})(Login));
