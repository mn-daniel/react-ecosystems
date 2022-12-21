import React from 'react';
import styled from 'styled-components';
import TodoList from './todos/TodoList';

const AppContainer = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    width: calc(100vw - 4rem);
    height: 100vh;
`;

const App = () => (
    <AppContainer>
        <TodoList />
    </AppContainer>
);

export default App;