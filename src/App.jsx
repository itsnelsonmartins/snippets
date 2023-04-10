import { useContext } from 'react';
import { ContextApi } from './ContextApi';

import Search from './components/Search.component';
import Sidebar from './components/Sidebar.component';
import SnippetsGrid from './components/SnippetsGrid.component';

import snippetsData from './snippets.json';

const App = () => {
    const { search, theme } = useContext(ContextApi);
    const [searchValue, setSearchValue] = search;
    const [themeValue, setThemeValue] = theme;

    const tags = snippetsData.snippets
        .flatMap((snippet) => snippet.tags)
        .filter((tag, index, self) => self.indexOf(tag) === index)
        .sort();

    return (
        <div className='app'>
            <Search />
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
