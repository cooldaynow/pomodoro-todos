import React from "react";
import FilterSection from "../FilterSection";
import TodoSection from "../../components/TodoSection";
import SessionSection from "../../components/SessionSection";
import { WrapTodo, WrapApp, BodyApp } from "./styled";

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
