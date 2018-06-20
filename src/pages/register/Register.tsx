import * as React from 'react';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { StateProps, DispatchProps, OwnProps } from './_register';
import { browserHistory } from 'react-router';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Login extends React.Component<Props, {}> {
  submitForm = (v: any) => {
    const { register } = this.props;

    const user = {
      email: v.email,
      password: v.password,
    };
    register(user);
  }
  componentWillReceiveProps(next: any) {
    if (next.auth.user) {
      browserHistory.push('/overview');
    }
  }

  render() {
    const { handleSubmit, auth } = this.props;
    return (
      <section className="public-pages">
        <div className="register">
          <div className="box-content">
            <div className="box-header">
              <h6 className="h6">Register</h6>
            </div>
            <form onSubmit={handleSubmit(this.submitForm)}>
              {auth.registerError && (
                <h5 className="error">
                  {auth.registerError.message}
                </h5>
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
                label="Register"
                primary={true}
                style={{ marginTop: '20px' }}
              />
            </form>
          </div>
          <footer>
            <Link className="styledRouterLink" to="/login" activeClassName="active">Login</Link>
          </footer>
        </div>
      </section>
    );
  }
}