/**
 * SPEC
 *
 *** Create a todo
 *** Check a todo
 * Delete a todo
 */

export const CREATE_TODO = 'CREATE_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const createTodo = todo => ({
  type: CREATE_TODO,
  todo
});

export const completedTodo = id => ({
  type: COMPLETED_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});