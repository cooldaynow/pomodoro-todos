import React, { useState } from "react";
import { setFilter } from "../../actions";
import { useDispatch } from "react-redux";
import {
  HeadFilter,
  FilterButton,
  WrapFilterSection
} from "./styled";

const FilterSection = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  const handleClick = (buttonIndex, filter) => {
    setActive(buttonIndex);
    dispatch(setFilter(filter));
  };

  return (
    <WrapFilterSection>
      <HeadFilter> FILTER </HeadFilter>
      <FilterButton
        disabled={active === 0}
        onClick={() => {
          handleClick(0, "SHOW_ALL");
        }}
      >
        ALL
      </FilterButton>
      <FilterButton
        disabled={active === 1}
        onClick={() => handleClick(1, "SHOW_COMPLETED")}
      >
        COMPLETED{" "}
      </FilterButton>
      <FilterButton
        disabled={active === 2}
        onClick={() => handleClick(2, "SHOW_UNFULFILLED")}
      >
        UNFULFILLED
      </FilterButton>
    </WrapFilterSection>
  );
};

export default FilterSection;
