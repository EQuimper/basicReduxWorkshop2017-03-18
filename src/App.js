import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { createTodo, completedTodo, deleteTodo } from './actions';

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 30px;
  color: ${props => props.color};
  &:hover {
    color: blue;
  }
`;

const ListGroup = styled.div`
  margin-top: 5%;
`;

class App extends Component {
  state = {
    todo: ''
  }

  _handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo(this.state.todo);
    this.setState({ todo: '' });
  }

  _changeTodo = e => this.setState({ todo: e.target.value })

  _handleCompleted = id => this.props.completedTodo(id)

  _handleDeleted = id => this.props.deleteTodo(id)

  render() {
    const {
      todos
    } = this.props;
    return (
      <AppWrapper>
        <Title color="red">Hello thinkful</Title>
        <form onSubmit={this._handleSubmit}>
          <input
            type="text"
            placeholder="Add a new todo"
            value={this.state.todo}
            onChange={this._changeTodo}
          />
        </form>
        <ListGroup>
          {todos.map(({ todo, id, completed }) => (
            <li key={id}>
              {todo}
              <input
                type="checkbox"
                checked={completed}
                onChange={() => this._handleCompleted(id)}
              />
              <button onClick={() => this._handleDeleted(id)}>&#x2717;</button>
            </li>
          ))}
        </ListGroup>
      </AppWrapper>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),
  { createTodo, completedTodo, deleteTodo }
)(App);
