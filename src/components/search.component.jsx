import { useContext } from 'react';
import { ContextApi } from '../ContextApi';

const Search = () => {
    const { search } = useContext(ContextApi);
    const [searchValue, setSearchValue] = search;

    const submitHandler = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <p class='control is-expanded'>
            <input
                className='input'
                type='text'
                value={searchValue}
                placeholder='Filter...'
                onChange={handleChange}
            />
        </p>
    );
};

export default Search;
