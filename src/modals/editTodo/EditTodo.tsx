import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_editTodo';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import RaisedButton from 'material-ui/RaisedButton';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

export type Props = StateProps & OwnProps & DispatchProps;

export default class EditTodo extends React.PureComponent<Props, {}> { 
  handleClose = () => {
    const { hideModal } = this.props;
    hideModal();
  }

  submitForm = (v: any) => {
    const { editTodo, auth, resetForm } = this.props;
    editTodo(auth.user.uid, v);
    resetForm('editTodo');

    this.handleClose();
  }
  
  render() {
      const { activeModal, handleSubmit } = this.props;
    return (
      <div className="Edit">
        <Dialog
          title="Edit your To Do here"
          modal={false}
          open={activeModal === 'editTodo' ? true : false}
          onRequestClose={this.handleClose}
        >
        <form onSubmit={handleSubmit(this.submitForm)}>
          <div className="input-wrap">
            <Field
              component={TextField}
              floatingLabelFixed={true}
              floatingLabelText={'Previous todo text:'}
              fullWidth={true}
              name="name"
              className="input-wrapper input"
            />
          </div>
          <RaisedButton
            type="submit"
            label="Submit"
            primary={true}
            style={{ marginTop: '20px' }}
          />
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose}
            style={{ marginLeft: '40px', color: 'black' }}
          />
        </form>
        </Dialog>
      </div>
    );
  }
}
