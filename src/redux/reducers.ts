import { combineReducers } from 'redux';
import { routerReducer as routing, RouterState } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { FormState } from 'redux-form';
import { createResponsiveStateReducer } from 'redux-responsive';

import auth from './auth/reducer';
import { AuthState } from './auth/interface';

import todo from './todo/reducer';
import { TodoState } from './todo/interface';

import ui from './ui/reducer';
import { UiState } from './ui/interface';

export interface ApplicationState {
  routing: RouterState;
  form: FormState;
  browser: any;
  auth: AuthState;
  todo: TodoState;
  ui: UiState;
}

export const appReducers = combineReducers<ApplicationState>({
  form: formReducer,
  auth,
  routing,
  todo,
  ui,
  browser: createResponsiveStateReducer({
    xs: 500,
    sm: 700,
    md: 1000,
    lg: 1280,
    xl: 1400,
  }),
});
