import { useContext } from 'react';
import { ContextApi } from '../ContextApi';

import hc from '/hc.svg';

const Search = () => {
    const { search, theme } = useContext(ContextApi);
    const [searchValue, setSearchValue] = search;
    const [themeValue, setThemeValue] = theme;

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    // ThemeChanger function to change between dar and light mode
    const themeChanger = () => {
        if (themeValue === 'light') {
            document.firstElementChild.setAttribute('color-scheme', 'dark');
            setThemeValue('dark');
        } else {
            document.firstElementChild.setAttribute('color-scheme', 'light');
            setThemeValue('light');
        }
    };

    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <div className='logo navbar-item'>
                    <p className='title logo'>Snips!</p>
                </div>
            </div>
            <div className='navbar-item'>
                <input
                    className='input'
                    type='text'
                    value={searchValue}
                    placeholder='Filter...'
                    onChange={handleChange}
                />
            </div>
            <div className='navbar-end'>
                <div className='navbar-item'>
                    <button className='button' onClick={themeChanger}>
                        <span className='icon'>
                            <img src={hc} alt='half circle symbol' />
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Search;
