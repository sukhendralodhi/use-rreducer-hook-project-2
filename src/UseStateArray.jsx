import { useReducer } from "react";
import { data } from "./data";

const defaultState = {
  people: data,
  isLoading: false,
};

const CLEAR_ALL = "CLEAR_ALL";
const RESET_ALL = "RESET_ALL";
const REMOVE_ITEM = "REMOVE_ITEM";

const reducer = (state, action) => {
  if (action.type === CLEAR_ALL) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_ALL) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  throw new Error(`No matching "${action.type}" action`);
};

const UseStateArray = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleRemove = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const handleClearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  const resetPeople = () => {
    dispatch({ type: "RESET_ALL" });
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
