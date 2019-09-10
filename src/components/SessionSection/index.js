import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  SessionWrap,
  SessionTable,
  SessionHeader,
  SessionPomodoros
} from "./styled";

const SessionSection = () => {
  const { todos, indexTodo } = useSelector(state => state);
  const [{ mins, secs, type, pomodoros }, setSession] = useState({
    mins: "",
    secs: "",
    type: "",
    pomodoros: ""
  });
  useEffect(() => {
    if (!todos.length) {
      return;
    }
    const session = todos[indexTodo].session;
    setSession(session);
  }, [indexTodo, todos]);

  return (
    <SessionWrap>
      <SessionTable>
        {todos.length > 0 && (
          <>
            <SessionHeader>
              Todo №{indexTodo + 1} {type} =>
              {`${mins < 10 ? `0${mins}` : mins}:${
                secs < 10 ? `0${secs}` : secs
              }`}
            </SessionHeader>
            <SessionPomodoros>
              Pomodoros count: {pomodoros}
            </SessionPomodoros>
          </>
        )}
      </SessionTable>
    </SessionWrap>
  );
};

export default SessionSection;
