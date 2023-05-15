import { useState } from 'react';
import { data } from './data';
import React from 'react';

const UseStateArray = () => {
    const [people, setPeople] = useState(data);

    const handleRemove = (id) => {
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }

    const handleClearAll = () => {
        setPeople([]);
    }

    return (
        <>
            {people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id}>
                        <h4>{name}</h4>
                        <button onClick={() => handleRemove(id)}>remove</button>
                    </div>
                );
            })}
            <button onClick={() => handleClearAll()} className='btn'>clear all</button>
        </>
    );
}

export default UseStateArray;