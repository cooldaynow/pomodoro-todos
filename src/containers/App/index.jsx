import React from "react";
import FilterSection from "../FilterSection/styled";
import TodoSection from "../../components/TodoSection/styled";
import { WrapTodo, WrapApp } from "./styled";
import SessionSection from '../../components/SessionSection'

const App = ({ className }) => {
  return (
    <div className={className}>
      <WrapApp>
        <SessionSection />
        <WrapTodo>
          <FilterSection />
          <TodoSection />
        </WrapTodo>
      </WrapApp>
    </div>
  );
};

export default App;
