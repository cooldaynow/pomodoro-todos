import React from "react";
import { connect } from "react-redux";

import SessionWrap, { SessionTable, SessionHeader } from "./styled";

const SessionSection = ({ name, mins, secs, indexTodo, todos }) => {
  return (
    <SessionWrap>
      <SessionTable>
        {todos.length > 0 && (
          <SessionHeader>
            Todo №{indexTodo + 1} {name} => {mins} : {secs === 0 ? "00" : secs}
          </SessionHeader>
        )}
      </SessionTable>
    </SessionWrap>
  );
};

const mapStateToProps = ({ todos, indexTodo }) => {
  if (!todos.length) {
    return {
      todos
    };
  }
  const {
    session: { name, mins, secs }
  } = todos[indexTodo];
  return {
    name,
    mins,
    secs,
    todos,
    indexTodo
  };
};

export default connect(mapStateToProps)(SessionSection);
