import React from 'react';
const Search = ({ value, onChange }) => {
    return (
        <input
            type='text'
            placeholder='Filter...'
            value={value}
            onChange={onChange}
        />
    );
};

export default Search;
