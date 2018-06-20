import * as React from 'react';

import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

interface Props {
  resetPasswordByEmail: (email: any) => {};
  handleSubmit: any;
  requestedPasswordReset: boolean;
}
interface OwnProps { }

export default class ResetPasword extends React.Component<Props, OwnProps> {
  submitForm = (v: any) => {
    const { resetPasswordByEmail } = this.props;
    resetPasswordByEmail(v.email);
  }

  render() {
    const { handleSubmit, requestedPasswordReset } = this.props;
    return (
      <section className="public-pages">
        <div className="reset-password">
          <div className="box-content">
            <div className="box-header">
              <h6 className="h6">Reset Password</h6>
            </div>
            {!requestedPasswordReset
              ? <form onSubmit={handleSubmit(this.submitForm)}>
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
                <RaisedButton
                  fullWidth={true}
                  type="submit"
                  label="Reset"
                  primary={true}
                  style={{ marginTop: '20px' }}
                />
              </form>
              : <p>Follow the link we sent via email to reset your password.</p>}
          </div>
          <footer>
            <Link to="/login" className="styledRouterLink" activeClassName="active">Login</Link>
          </footer>
        </div>
      </section>
    );
  }
}
