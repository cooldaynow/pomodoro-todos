import React from "react";
import { setFilter } from "../../actions";
import { connect } from "react-redux";
import { HeadFilter, FilterButton } from "./styled";

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

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(
  null,
  mapDispatchToProps
)(FilterSection);
