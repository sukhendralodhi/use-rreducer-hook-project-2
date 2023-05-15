import { useReducer, useState } from 'react';
import { data } from './data';
import React from 'react';

const defaultState = {
    people: data,
    isLoading: false,
};

const reducer = (state, action) => {
    if (action.type === 'CLEAR_ALL') {
        return { ...state, people: [] }
    } else if (action.type === 'RESET_ALL') {
        return { ...state, people: data }
    }
};

const UseStateArray = () => {

    const [state, dispatch] = useReducer(reducer, defaultState);



    // const [people, setPeople] = useState(data);

    const handleRemove = (id) => {
        // const newPeople = people.filter((person) => person.id !== id);
        // setPeople(newPeople);
    };

    const handleClearAll = () => {
        dispatch({ type: 'CLEAR_ALL' });
        // setPeople([]);
    };

    const resetPeople = () => {
        dispatch({ type: 'RESET_ALL' });
        // setPeople(data);
    }

    return (
        <>
            {state.people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id}>
                        <h4>{name}</h4>
                        <button onClick={() => handleRemove(id)}>remove</button>
                    </div>
                );
            })}
            {state.people.length > 0 ? (<button onClick={() => handleClearAll()} className='btn'>clear all</button>) : <button onClick={() => resetPeople()} className='btn'>reset all</button>}
        </>
    );
}

export default UseStateArray;