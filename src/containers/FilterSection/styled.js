import styled from "styled-components";
import FilterSection from ".";

export const StyledFilterSection = styled(FilterSection)`
  display: flex;
  flex-direction: column;
  background-color: silver;
  height: 400px;
  position: relative;
`;
export const HeadFilter = styled.div`
  width: 100%;
  text-align: center;
  top: -20px;
  position: absolute;
`;
export const FilterButton = styled.button`
  margin: 5px 5px 0 5px;
  width: 100px;
  height: 100px;
  outline: none;
  border-radius: 10px;
  transition: all 0.1s linear;
  background-color: grey;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`;
export default StyledFilterSection;
