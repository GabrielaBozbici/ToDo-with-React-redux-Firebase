import { Todo } from './interface';
import * as actions from './actions';
import { firebaseDb } from '../../firebase';

export function createTodo(todo: Todo, userID: string) {
    // firebase functions  
    return function (dispatch: Function) {
        dispatch(actions.createTodoStart());
        let todoRef: any = firebaseDb.ref().child(`/todos/${userID}`).push();
        let key = todoRef.getKey();
        todo.id = key;
        todoRef.set(todo, (error: any) => {
            if (error) {
                console.log(error);
                dispatch(actions.createTodoError(error));
            } else {
                dispatch(actions.createTodoSuccess(todo));
            }
        });
    };
}

export function getTodos(userID: string) {
    return function (dispatch: Function) {
        dispatch (actions.getTodosStart());
        firebaseDb.ref().child(`/todos/${userID}`).once('value').then((snapshot) => {
            console.log('snapshot: ', snapshot, snapshot.val());
            // if the user has no entries yet, we'll return an empty object. Else there will be error
            const todosArr = snapshot.val() ? Object.keys(snapshot.val()).map( i => snapshot.val()[i]) : [];
            dispatch(actions.getTodosSuccess(todosArr));
        }).catch((err: any) => {
            dispatch(actions.getTodosError(err));
        });
    };
}

export function deleteTodo(userID: string, todo: Todo) {
    return function (dispatch: Function) {
        dispatch (actions.deleteTodoStart());
        firebaseDb.ref().child(`/todos/${userID}/${todo.id}`).remove((error) => {
            if(error) { 
                dispatch(actions.deleteTodoError(error));
            } else {
                dispatch(actions.deleteTodoSuccess(todo));
            }
        });
    };
}

export function editTodo (userID: string, todo: Todo) {
    console.log('blaa: ', userID, todo);
    return function(dispatch: Function) {
        dispatch(actions.editTodoStart());
        firebaseDb.ref().child(`/todos/${userID}/${todo.id}`).set(todo, (error) => {
            if (error) {
                dispatch(actions.editTodoError(error));
            } else {
                dispatch(actions.editTodoSuccess(todo));
            }
        });
    };
}