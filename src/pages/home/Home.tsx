import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_home';

import { Flex } from 'grid-styled';

import RaisedButton from 'material-ui/RaisedButton';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import { Todo } from  '../../redux/todo/interface';

import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import Check from 'material-ui/svg-icons/navigation/check';
import IconButton from 'material-ui/IconButton';

import EditTodo from '../../modals/editTodo';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Home extends React.Component<Props,{}> {
  logout = () => {
    const { logoutUser } = this.props;
    logoutUser();
  }

  submitForm = (v: any) => {
    const { createTodo, auth } = this.props;
    const todo = {
      name: v.name,
      description: v.description,
      completed: false,
      date: new Date().getTime()
    };
    createTodo(todo, auth.user.uid);
  }

  handleDelete = (todo: Todo) => {
    const { deleteTodo, auth } = this.props;
    deleteTodo(auth.user.uid, todo);
  }

  handleEdit = (todo: Todo) => {
    const { showModal } = this.props;
    showModal('editTodo', todo);
  }

  handleCheck = (todo: Todo) => {
    const {auth, editTodo } = this.props;
    const newTodo = Object.assign({}, todo); 
    // it needs a new object in order to loose the previous refernce. The todo should not be mutated here
    // because redux get's confused and the ui does not update!
    newTodo.completed = !newTodo.completed;
    
    editTodo(auth.user.uid, newTodo);
  }
  render() {
    const {handleSubmit, todos} = this.props;
    return (
      <div className="Home">
        <h1 className="page-header">Home page</h1>
        <button onClick={this.logout} className="logoutButton">Logout</button>
        <Flex className="page-content" >
        <form onSubmit={handleSubmit(this.submitForm)}>
              <div className="input-wrap">
                <Field
                  component={TextField}
                  floatingLabelFixed={true}
                  floatingLabelText={'Todo'}
                  fullWidth={true}
                  name="name"
                  className="input-wrapper input"
                />
              </div>
              <div className="input-wrap">
                <Field
                  component={TextField}
                  floatingLabelFixed={true}
                  floatingLabelText={'Description'}
                  fullWidth={true}
                  name="description"
                  className="input-wrapper input"
                />
              </div>
              <RaisedButton
                fullWidth={true}
                type="submit"
                label="Submit"
                primary={true}
                style={{ marginTop: '20px' }}
              />
        </form>
        </Flex>
        <div className="todoList">
         {todos.map((todo: Todo ) => {
           return (
            <li key={todo.id} className="todoItem">
            {todo.name}
            <IconButton className="deleteButton" aria-label="Delete" onClick={() => this.handleDelete(todo)}>
              <Delete />
            </IconButton>
            <IconButton className="editButton" aria-label="Edit" onClick={() => this.handleEdit(todo)}>
              <Edit />
            </IconButton>
            <IconButton className="checkButton" aria-label="Check" onClick={() => this.handleCheck(todo)}>
              <Check className={todo.completed ? 'itemChecked' : ''}/>
            </IconButton>
            </li>
           );
         })}
        </div>
        <EditTodo />
      </div>
    );
  }
}
