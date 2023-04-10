import { useContext } from 'react';
import { ContextApi } from './ContextApi';

import Search from './components/Search.component';
import Sidebar from './components/Sidebar.component';
import SnippetsGrid from './components/SnippetsGrid.component';

import snippetsData from './snippets.json';

import hc from '/hc.svg';

const App = () => {
    const { search, theme } = useContext(ContextApi);
    const [searchValue, setSearchValue] = search;
    const [themeValue, setThemeValue] = theme;

    const tags = snippetsData.snippets
        .flatMap((snippet) => snippet.tags)
        .filter((tag, index, self) => self.indexOf(tag) === index)
        .sort();

    // ThemeChanger function to change between dar and light mode
    const themeChanger = () => {
        // if (themeValue === 'light') {
        //     document.firstElementChild.setAttribute('color-scheme', 'dark');
        //     setThemeValue('dark');
        // } else {
        //     document.firstElementChild.setAttribute('color-scheme', 'light');
        //     setThemeValue('light');
        // }
    };

    return (
        <div className='app'>
            <nav
                className='navbar'
                role='navigation'
                aria-label='main navigation'>
                <div className='navbar-brand'>
                    <div className='logo navbar-item'>
                        <p className='title logo'>Snips!</p>
                    </div>
                </div>
                <div className='navbar-item'>
                    <Search />
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
            <section className='section'>
                <div className='columns'>
                    <div className='column is-2'>
                        <Sidebar tags={tags} />
                    </div>
                    <div className='column is-10'>
                        <SnippetsGrid data={snippetsData} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;
