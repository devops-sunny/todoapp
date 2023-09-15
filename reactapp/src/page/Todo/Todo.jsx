import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const users = useSelector((state) => state.todos.todo);
  const navigate = useNavigate();
  const [state, setState] = useState();
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? (
        <>
          <div className="continuerlist">
            <div className="nav">
              <div className="continue">
                <h1>Notes</h1>
              </div>
              <div className="todo">
                <button onClick={() => navigate("/addtodo")}>
                  {" "}
                  + ADD Task
                </button>
              </div>
            </div>
            <div className="list">
              {users.map((row) => {
                return (
                  <>
                    <div
                      className="toDo"
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(false);
                        setState(row);
                      }}>
                      {row.title}
                      <div className="icons"></div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="nav-bottom">
              <div className="continue"></div>
              <div className="todo">
                <button onClick={() => navigate("/addtodo")}>
                  {" "}
                  + ADD Task
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
        <div className="continuerlist_mtop"></div>
          <div className="continuerlist">
            <h1>{state.title}</h1>
            <p>
              <div
                className="text-input editer"
                contentEditable={false}
                dangerouslySetInnerHTML={{ __html: state.description }}
                dir="ltr"
              />
            </p>
          </div>
        </>
      )}
    </>
  );
}
