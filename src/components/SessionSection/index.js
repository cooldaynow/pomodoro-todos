import React from "react";
import { connect } from "react-redux";

import SessionWrap, { SessionTable, SessionHeader } from "./styled";

const SessionSection = ({ name, time }) => {
  return (
    <SessionWrap>
      <SessionTable>
        <SessionHeader>
          {name} : {time}
        </SessionHeader>
      </SessionTable>
    </SessionWrap>
  );
};

const mapStateToProps = ({ session: { name, time } }) => {
  return {
    name,
    time
  };
};

export default connect(mapStateToProps)(SessionSection);
