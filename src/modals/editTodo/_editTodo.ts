import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import EditTodo from './EditTodo';
import { reduxForm } from 'redux-form';
import  { editTodo } from '../../redux/todo/creators';
import { hideModal } from '../../redux/ui/actions';
import { resetForm } from '../../redux/ui/creators';

export interface OwnOptionalProps {
  handleSubmit: any;
  initialValues: any;
}
  
export interface OwnProps extends Partial<OwnOptionalProps> { }

export interface StateProps { 
  auth: any;
  activeModal: string | null;
 }
export interface DispatchProps {
  editTodo: Function;
  hideModal: Function;
  resetForm: Function;
}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      auth: state.auth,
      activeModal: state.ui.activeModal,
      initialValues: state.ui.modalData
    };
  },
  {
    editTodo,
    hideModal,
    resetForm
  },
)(reduxForm({
  form: 'editTodo',
  enableReinitialize: true
})(EditTodo));
