import {
  CREATE_TODO,
  COMPLETED_TODO,
  DELETE_TODO
} from './actions';

const INITIAL_STATE = [
  {
    todo: 'Say hello',
    completed: false,
    id: 1
  },
  {
    todo: 'Walk the dog',
    completed: true,
    id: 2
  }
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, {
        todo: action.todo,
        completed: false,
        id: state.length + 1
      }];

    case COMPLETED_TODO:
      return state.map(item =>
        item.id === action.id
          ? {
            ...item,
            completed: !item.completed
          }
          : item
      );

    case DELETE_TODO:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};