import React from 'react';

const Sidebar = ({ tags, handleFilter }) => {
    return (
        <nav>
            <ul>
                <li key='all'>
                    <button className='btn' onClick={() => handleFilter('')}>
                        All
                    </button>
                </li>
                {tags.map((tag, index) => (
                    <li key={index}>
                        <button
                            className='btn'
                            onClick={() => handleFilter(tag)}>
                            {tag.toLowerCase()}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
