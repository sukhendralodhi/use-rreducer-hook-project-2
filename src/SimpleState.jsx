import { useState } from "react";
import { data } from "./data";

const SimpleState = () => {
  const [people, setPeople] = useState(data);

  const handleRemove = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const handleRemoveAll = () => {
    setPeople([]);
  };

  const handleResetAll = () => {
    setPeople(data);
  };
  return (
    <div>
      <h3>Using useState</h3>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => handleRemove(id)}>remove</button>
          </div>
        );
      })}

      {people.length > 0 ? (
        <button onClick={() => handleRemoveAll()} className="btn">
          clear all
        </button>
      ) : (
        <button onClick={() => handleResetAll()} className="btn">
          reset all
        </button>
      )}
    </div>
  );
};

export default SimpleState;
