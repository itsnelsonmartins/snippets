import React, { useState } from 'react';
import MarkdownGrid from './components/component.MarkdownGrid';
import Search from './components/component.Search';
import Footer from './components/component.Footer';
import Sidebar from './components/component.Sidebar';

import snippetsData from './snippets.json';

const App = () => {
    const [filterInput, setFilterInput] = useState('');

    const handleFilterChange = (e) => {
        setFilterInput(e.target.value);
    };

    const handleFilter = (tag) => {
        setFilterInput(tag);
    };

    const tags = snippetsData.snippets
        .flatMap((snippet) => snippet.tags)
        .filter((tag, index, self) => self.indexOf(tag) === index)
        .sort();

    return (
        <div className='app'>
            <header>
                <img src='/icon.svg' />
                <Search value={filterInput} onChange={handleFilterChange} />
            </header>
            <div className='container'>
                <Sidebar tags={tags} handleFilter={handleFilter} />
                <main>
                    <MarkdownGrid data={snippetsData} filter={filterInput} />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default App;
