import { useContext } from 'react';
import { ContextApi } from '../ContextApi';

const Sidebar = ({ tags }) => {
    const { search, setSearch } = useContext(ContextApi);

    const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || '';

    const handleFilter = (tag) => {
        setSearch(tag);
    };

    return (
        <aside className='is-medium menu'>
            <p className='menu-label'>Tags</p>
            <ul className='menu-list'>
                <li key='all'>
                    <a href='#!' onClick={() => handleFilter('')}>
                        All
                    </a>
                </li>
                {tags.map((tag, index) => (
                    <li key={index}>
                        <a href='#!' onClick={() => handleFilter(tag)}>
                            {capitalize(tag)}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
