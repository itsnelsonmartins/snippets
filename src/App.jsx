import { useContext } from 'react';
import { ContextApi } from './ContextApi';

import Search from './components/search.component';
import Sidebar from './components/sidebar.component';
import SnippetsGrid from './components/snippetsgrid.component';

import snippetsData from './snippets.json';

const App = () => {
    const { search, theme } = useContext(ContextApi);
    const [searchValue, setSearchValue] = search;

    const tags = snippetsData.snippets
        .flatMap((snippet) => snippet.tags)
        .filter((tag, index, self) => self.indexOf(tag) === index)
        .sort();

    return (
        <div className='app'>
            <Search />
            <section className='section'>
                <div className='columns'>
                    <div className='column is-1'>
                        <Sidebar tags={tags} />
                    </div>
                    <div className='column is-11'>
                        <SnippetsGrid data={snippetsData} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;
