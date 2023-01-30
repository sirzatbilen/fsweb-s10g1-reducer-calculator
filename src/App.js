import React from "react";
import { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import {
  applyNumber,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_ADD,
  MEMORY_ADD_TOTAL,
  MEMORY_RESET,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumber = (event) => {
    dispatch(applyNumber(Number(event.target.value)));
  };
  const handleOperation = (event) => {
    dispatch({ type: CHANGE_OPERATION, payload: event.target.value });
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => dispatch({ type: MEMORY_ADD })}
              />
              <CalcButton
                value={"MR"}
                onClick={() => dispatch({ type: MEMORY_ADD_TOTAL })}
              />
              <CalcButton
                value={"MC"}
                onClick={() => dispatch({ type: MEMORY_RESET })}
              />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={(event) => {
                  handleNumber(event);
                }}
              />
              <CalcButton
                value={2}
                onClick={(event) => {
                  handleNumber(event);
                }}
              />
              <CalcButton
                value={3}
                onClick={(event) => {
                  handleNumber(event);
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={(event) => {
                  handleNumber(event);
                }}
              />
              <CalcButton
                value={5}
                onClick={(event) => {
                  handleNumber(event);
                }}
              />
              <CalcButton
                value={6}
                onClick={(event) => {
                  handleNumber(event);
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={(event) => {
                  handleNumber(event);
                }}
              />
              <CalcButton
                value={8}
                onClick={(event) => {
                  handleNumber(event);
                }}
              />
              <CalcButton
                value={9}
                onClick={(event) => {
                  handleNumber(event);
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={(event) => {
                  handleOperation(event);
                }}
              />
              <CalcButton
                value={"*"}
                onClick={(event) => {
                  handleOperation(event);
                }}
              />
              <CalcButton
                value={"-"}
                onClick={(event) => {
                  handleOperation(event);
                }}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => dispatch({ type: CLEAR_DISPLAY })}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
