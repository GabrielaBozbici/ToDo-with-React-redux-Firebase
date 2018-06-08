import * as types from './types';
import { Todo } from './interface';

export function createTodoStart() {
    return {
      type: types.CREATE_TODO_START,
    };
}

export function createTodoSuccess(todo: Todo) {
    return {
      type: types.CREATE_TODO_SUCCESS,
      payload: todo
    };
}

export function createTodoError(err: any) {
    return {
      type: types.CREATE_TODO_ERROR,
      payload: err
    };
}

export function getTodosStart () {
  return {
    type: types.GET_TODOS_START
  };
}

export function getTodosSuccess(todos: Todo[]) {
  return {
    type: types.GET_TODOS_SUCCESS,
    payload: todos
  };
}

export function getTodosError(err: any) {
  console.log('error');
  return {
    type: types.GET_TODOS_ERROR,
    payload: err
  };
}

export function deleteTodoStart() {
  return {
    type: types.DELETE_TODO_START
  };
}

export function deleteTodoSuccess(todo: Todo) {
  return {
    type: types.DELETE_TODO_SUCCESS,
    payload: todo
  };
}

export function deleteTodoError(err: any) {
  return {
    type: types.DELETE_TODO_ERROR,
    payload: err
  };
}

export function editTodoStart() {
  return {
    type: types.EDIT_TODO_START
  };
}

export function editTodoSuccess(todoEdited: Todo) {
  return {
    type: types.EDIT_TODO_SUCCESS,
    payload: todoEdited
  };
}

export function editTodoError(err: any) {
  return {
    type: types.EDIT_TODO_ERROR,
    payload: err
  };
}