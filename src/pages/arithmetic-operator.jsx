import { useReducer } from "react";
import Button from "../components/button";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: initialState.count };
    default:
      return state;
  }
}

export default function ArithemeticOperator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col gap-2 items-center justify-center ">
      <h1>Manipulate count</h1>

      <div className="text-3xl">{state.count}</div>

      <div className="flex gap-2 ">
        <Button
          onClick={() => dispatch({ type: "decrement" })}
          message="decrease (-1)"
        />

        <Button
          onClick={() => dispatch({ type: "reset", payload: 0 })}
          message="reset"
        />

        <Button
          onClick={() => dispatch({ type: "increment" })}
          message="increase (+1)"
        />
      </div>
    </div>
  );
}
