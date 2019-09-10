import styled from "styled-components";

export const WrapFilterSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: silver;
  max-height: 800px;
  min-height: 500px;
  position: relative;
`;
export const HeadFilter = styled.div`
  width: 100%;
  text-align: center;
  top: -20px;
  position: absolute;
`;
export const FilterButton = styled.button`
  color: black;
  margin: 5px 5px 0 5px;
  width: 100px;
  height: 100px;
  outline: none;
  border-radius: 10px;
  transition: all 0.1s linear;
  background-color: ${({ disabled }) =>
    disabled ? "grey" : "silver"};
  cursor: pointer;
  &:hover {
    background-color: ${({ disabled }) => (disabled ? "" : "white")};
  }
`;
