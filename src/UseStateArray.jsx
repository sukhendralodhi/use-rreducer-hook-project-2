import { useReducer } from "react";
import { data } from "./data";
import { CLEAR_ALL, RESET_ALL, REMOVE_ITEM } from "./action";
import reducer from "./reducer";

const defaultState = {
  people: data,
  isLoading: false,
};

const UseStateArray = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleRemove = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const handleClearAll = () => {
    dispatch({ type: CLEAR_ALL });
  };

  const resetPeople = () => {
    dispatch({ type: RESET_ALL });
  };

  return (
    <>
      <h3>Using useReducer</h3>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => handleRemove(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length > 0 ? (
        <button onClick={() => handleClearAll()} className="btn">
          clear all
        </button>
      ) : (
        <button onClick={() => resetPeople()} className="btn">
          reset all
        </button>
      )}
    </>
  );
};

export default UseStateArray;
