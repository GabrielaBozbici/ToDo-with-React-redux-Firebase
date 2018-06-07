import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import { logoutUser } from '../../redux/actions';
import Home from './Home';
import { reduxForm } from 'redux-form';
import  { createTodo, deleteTodo, editTodo } from '../../redux/todo/creators';
import { showModal } from '../../redux/ui/actions';

export interface StateProps { 
  auth: any;
  todos: any;
  activeModal: string | null;
 }
export interface DispatchProps {
  logoutUser: () => Function;
  createTodo: Function;
  deleteTodo: Function;
  editTodo: Function;
  showModal: Function;
}

export interface OwnOptionalProps {
  handleSubmit: any;
}

export interface OwnProps extends Partial<OwnOptionalProps> { }
export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      auth: state.auth,
      todos: state.todo.list,
      activeModal: state.ui.activeModal
    };
  },
  {
    logoutUser,
    createTodo,
    deleteTodo,
    editTodo,
    showModal
  },
)(
  reduxForm({form: 'todo',
})
(Home)
);
