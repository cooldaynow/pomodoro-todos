import React from "react";
import styled from "styled-components";
import FilterSection from "../FilterSection";
import TodoSection from "../../components/TodoSection";

const App = ({ className }) => {
  return (
    <div className={className}>
      <FilterSection />
      <TodoSection />
    </div>
  );
};
const StyledApp = styled(App)`
  width: 100%;
  height: 100vh;
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledApp;
