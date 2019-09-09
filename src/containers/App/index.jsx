import React from "react";
import FilterSection from "../FilterSection/styled";
import TodoSection from "../../components/TodoSection";
import { WrapTodo, WrapApp, BodyApp } from "./styled";
import SessionSection from '../../components/SessionSection'

const App = () => {
  return (
    <BodyApp>
      <WrapApp>
        <SessionSection />
        <WrapTodo>
          <FilterSection />
          <TodoSection />
        </WrapTodo>
      </WrapApp>
    </BodyApp>
  );
};

export default App;
