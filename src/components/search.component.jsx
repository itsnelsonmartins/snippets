import { useEffect, useContext } from 'react';
import { ContextApi } from '../ContextApi';

const Search = () => {
    const { search, setSearch } = useContext(ContextApi);

    const submitHandler = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <form action='' onSubmit={submitHandler}>
            <input
                className='input'
                type='text'
                placeholder='Filter...'
                onChange={handleChange}
            />
        </form>
    );
};

export default Search;
