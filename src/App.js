import React from "react";
import Todo from "./component/todo/Todo";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import { TodoProvider } from "./context/TodoContext";
import styled from "styled-components";

function App() {
  return (
    <TodoProvider>
      <AppBlock className="App">
        <Header />
        <Todo />
        <Footer />
      </AppBlock>
    </TodoProvider>
  );
}

export default App;

const AppBlock = styled.div`
  max-width: 840px;
  padding: 3em 1em 0;
  margin: 0 auto;
`;
