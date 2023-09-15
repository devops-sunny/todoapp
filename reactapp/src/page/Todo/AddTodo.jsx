import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/todoSlice";
import { useNavigate } from "react-router-dom";
import Textediter from "../../components/Textediter";
import RightImage from "../../iamge/rightside.png";

const defaultValues = {
  title: "",
  description: "",
  date: "",
};

export default function AddTodo() {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [state, setState] = useState(defaultValues);

  const { title } = useMemo(() => state, [state]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const callbackfunctions = (data) => {
    setState({ ...state, description: data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setError("plz filed data");
    } else {
      state.date = new Date().toISOString();
      state.id = Date.now();
      dispatch(addTodo(state));
      setState(defaultValues);
      setError("");
      navigate("/");
    }
  };

  return (
    <>
      <div className="nav-add">
        <div className="continue">
          <img
            src={RightImage}
            height="20px"
            width="25px"
            onClick={() => navigate("/")}
          />
        </div>
        <div
          className="todo"
          onClick={handleSubmit}
          type="submit"
          value="Submit">
          <button>save</button>
        </div>
      </div>
      <div className="continue"></div>
      {error && <h2 style={{ colour: "red" }}>{error}</h2>}
      <div className="continuerlist">
        <input
          type="text"
          className="title"
          id="title"
          value={title}
          onChange={handleInputChange}
          name="title"
          placeholder="Title"
        />
        <br />
        <Textediter callbackfunctions={callbackfunctions} />
        <br />
      </div>
    </>
  );
}
