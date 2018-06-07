import * as types from './types';
import { TodoInitialState } from './initialState';
import { TodoState } from './interface';

export default function reducer(state: TodoState = TodoInitialState, action: any) {
  switch (action.type) {
    case types.CREATE_TODO_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.CREATE_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        list: [
          ...state.list, 
          action.payload
        ]
      };
    }
    case types.CREATE_TODO_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.GET_TODOS_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_TODOS_SUCCESS: {
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    }
    case types.GET_TODOS_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.DELETE_TODO_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.DELETE_TODO_SUCCESS: {
      console.log('deleted success');
      let newList = [...state.list];
      let found: any = newList.find((element) => {
        return element.id === action.payload.id;
      });
      let idx = newList.indexOf(found);
        newList.splice(idx, 1);
          return {
            ...state,
            list: [
                ...newList
            ],
            isLoading: false
      };
    }
    case types.DELETE_TODO_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.EDIT_TODO_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.EDIT_TODO_SUCCESS: {
      console.log('action.payload: ', action.payload);
      // const newState = Object.assign({}, state);
      let newList = [...state.list];
      let found: any = newList.find((element) => {
        return element.id === action.payload.id;
      });
      let idx = state.list.indexOf(found);
      // newList.splice(idx,1,action.payload);
      // newList[idx] = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          ...newList.splice(idx,1,action.payload),
          
        ]
      };
    }
    case types.EDIT_TODO_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return { ...state };
    }
  }
}