import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_home';
import * as _ from 'lodash';

import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import { Todo } from  '../../redux/todo/interface';

import Power_off from 'material-ui/svg-icons/action/power-settings-new';

import Donut from 'material-ui/svg-icons/action/donut-large';
import Person from 'material-ui/svg-icons/social/person';
import Add_Circle_Outline from 'material-ui/svg-icons/content/add-circle-outline';
import Edit from 'material-ui/svg-icons/image/edit';
import Check from 'material-ui/svg-icons/navigation/check';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

import EditTodo from '../../modals/editTodo';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Home extends React.Component<Props,{}> {

  handleAccount = () => {
    console.log('this will be a link to the persons account');
  }
  logout = () => {
    const { logoutUser } = this.props;
    logoutUser();
  }

  submitForm = (v: any) => {
    const { createTodo, auth } = this.props;
    if(v.name) {
      const todo = {
        name: v.name,
        completed: false,
        date: new Date().getTime()
      };
      createTodo(todo, auth.user.uid);
    } else {
      console.log('empty space');
    }
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
      let year: any = new Date().getFullYear();
      const {handleSubmit, todos} = this.props;
      const filteredTodos = _.sortBy(todos, [(o: any) => {
        return o.date;
      }]).reverse();
      
      return (
        <div className="Home container">
            <div className="logo">
              <Donut />
              <p>React Redux Firebase</p>
            </div>
            <div className="buttons">
              <IconButton 
                onClick={this.handleAccount} 
                className="accountButton"
                style={{width: 'auto'}}
                children={
                  <Person />
                }
                tooltip={'Your account'}
              />
              <IconButton 
                onClick={this.logout} 
                className="logoutButton" 
                style={{width: 'auto'}}
                children={
                  <Power_off />
                }
                tooltip={'Log out'}
              />
            </div>
            <form onSubmit={handleSubmit(this.submitForm)} className="form">
              <div className="input-wrap">
                <Field
                  component={TextField}
                  placeholder="Write your todo here..."
                  name="name"
                  className="input-wrapper input"
                />
                <IconButton className="addButton" aria-label="Add" type="submit">
                  <Add_Circle_Outline/>
                </IconButton>
              </div>
            </form>
          <div className="todoList">
          {filteredTodos.map((todo: Todo ) => {
            return (
              <li key={todo.id} className="todoItem">
              <IconButton className="checkButton" aria-label="Check" onClick={() => this.handleCheck(todo)}>
                <Check className={todo.completed ? 'itemChecked' : ''}/>
              </IconButton>
              <h4 className={todo.completed ? 'todoTextDone' : 'todoText'}>{todo.name}</h4>
              <IconButton className="editButton" aria-label="Edit" onClick={() => this.handleEdit(todo)}>
                <Edit />
              </IconButton>
              <IconButton className="deleteButton" aria-label="Delete" onClick={() => this.handleDelete(todo)}>
                <Delete />
              </IconButton>
              </li>
            );
          })}
          </div>
          <EditTodo />
          <div className="page-footer">
            <span>&copy; {year} Gabriela Bozbici</span>
          </div>
      </div>
      );
  }
}
