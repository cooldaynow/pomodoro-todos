import React from "react";
import { setFilter } from "../../actions";
import { connect } from "react-redux";
import styled from "styled-components";

const FilterSection = ({ setFilter, className }) => {
  return (
    <div className={className}>
      <HeadFilter> FILTER </HeadFilter>
      <FilterButton onClick={() => setFilter("SHOW_ALL")}>
        ALL
      </FilterButton>
      <FilterButton onClick={() => setFilter("SHOW_COMPLETED")}>
        COMPLETED{" "}
      </FilterButton>
      <FilterButton onClick={() => setFilter("SHOW_UNFULFILLED")}>
        UNFULFILLED
      </FilterButton>
    </div>
  );
};
const StyledFilterSection = styled(FilterSection)`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  height: 400px;
  position: relative;
`;
const HeadFilter = styled.div`
  width: 100%;
  text-align: center;
  top: -20px;
  position: absolute;
`;
const FilterButton = styled.button`
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
const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(
  null,
  mapDispatchToProps
)(StyledFilterSection);
