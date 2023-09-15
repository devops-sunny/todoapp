import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageNotFound from "./page/PageNotFound/PageNotFound";
import Todo from "./page/Todo/Todo";
import AddTodo from "./page/Todo/AddTodo";

function App() {
  const Auth = [
    {
      path: "/",
      element: <Todo />,
    },
    {
      path: "/addtodo",
      element: <AddTodo />,
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          {Auth.map((item, index) => {
            return (
              <>
                <Route key={index} path={item.path} element={item.element} />
              </>
            );
          })}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
