import { useEffect, useContext } from 'react';
import { ContextApi } from './ContextApi';

import MarkdownGrid from './components/snippetsgrid.component';
import Search from './components/search.component';
import Sidebar from './components/sidebar.component';
import snippetsData from './snippets.json';

const App = () => {
    const { search } = useContext(ContextApi);
    const [searchValue, setSearchValue] = search;

    // const handleFilter = (tag) => {
    //     setFilterInput(tag);
    // };

    // const tags = snippetsData.snippets
    //     .flatMap((snippet) => snippet.tags)
    //     .filter((tag, index, self) => self.indexOf(tag) === index)
    //     .sort();

    return (
        <div className='app'>
            <section className='hero navigation'>
                <div className='hero-body'>
                    <div className='columns'>
                        <div className='column is-1'>
                            <p className='title logo'>Snips!</p>
                        </div>
                        <div className='column is-11'>
                            <Search />
                        </div>
                    </div>
                </div>
            </section>
            {/* <header>
                <Search/>
            </header>
            <div className='container'>
                <Sidebar tags={tags} handleFilter={handleFilter} />
                <main>
                    <MarkdownGrid data={snippetsData} filter={filterInput} />
                </main>
            </div> */}
        </div>
    );
};

export default App;
