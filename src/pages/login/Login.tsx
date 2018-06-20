import * as React from 'react';

import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { StateProps, DispatchProps, OwnProps } from './_login';
import { browserHistory } from 'react-router';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Login extends React.Component<Props, {}> {
  submitForm = (v: any) => {
    const { login } = this.props;
    const user = {
      email: v.email,
      password: v.password
    };
    login(user);
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.auth.user) {
      browserHistory.push('/authentication');
    }
  }

  render() {
    const { handleSubmit, auth } = this.props;
    return (
      <section className="public-pages">
        <div className="login">
          <div className="box-content">
            <div className="box-header">
              <h6 className="h6">Log into your account</h6>
            </div>
            <form onSubmit={handleSubmit(this.submitForm)}>
              {auth.loginError && (
                <div>
                  {auth.loginError.code === 'auth/wrong-password' ? (
                    <h5 className="error">
                      Wrong password
                    </h5>
                  ) : (
                      <h5 className="error">
                        {auth.loginError.message}
                      </h5>
                    )}
                </div>
              )}
              <div className="input-wrap">
                <Field
                  component={TextField}
                  floatingLabelFixed={true}
                  floatingLabelText={'Email'}
                  fullWidth={true}
                  name="email"
                  className="input-wrapper input"
                />
              </div>
              <div className="input-wrap">
                <Field
                  type="password"
                  component={TextField}
                  floatingLabelFixed={true}
                  floatingLabelText={'Password'}
                  fullWidth={true}
                  name="password"
                  className="input-wrapper input"
                />
              </div>
              <RaisedButton
                fullWidth={true}
                type="submit"
                label="Sign in"
                primary={true}
                style={{ marginTop: '20px' }}
              />
            </form>
          </div>
          <footer>
            <div className="register">
              <p>Don't have an account yet?</p>
              <Link to="/register" activeClassName="active">Register</Link>
            </div>
            <div className="resetPassword">
            <p>Forgot your password?</p>
              <Link to="/resetPassword" activeClassName="active">
                Reset password
              </Link>
            </div>
          </footer>
        </div>
      </section>
    );
  }
}
