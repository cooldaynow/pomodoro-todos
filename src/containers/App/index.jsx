import React from "react";
import FilterSection from "../FilterSection";
import TodoSection from "../../components/TodoSection/styled";
import { Test, WrapTodo, WrapApp   } from "./styled";

const App = ({ className }) => {
  return (
    <div className={className}>
      <WrapApp>
        <Test />
        <WrapTodo>
          <FilterSection />
          <TodoSection />
        </WrapTodo>
      </WrapApp>
    </div>
  );
};


export default App;
