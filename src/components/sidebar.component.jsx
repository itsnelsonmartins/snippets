import { useContext } from 'react';
import { ContextApi } from '../ContextApi';

const Sidebar = ({ tags }) => {
    const { search } = useContext(ContextApi);
    const [searchValue, setSearchValue] = search;

    const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || '';

    const handleFilter = (tag) => {
        setSearchValue(tag);
    };

    return (
        <aside className='menu'>
            <p className='menu-label'>Tags</p>
            <ul className='menu-list'>
                <li key='all'>
                    <a
                        href='#!'
                        onClick={() => handleFilter('')}
                        className='menu-item'>
                        All
                    </a>
                </li>
                {tags.map((tag, index) => (
                    <li key={index}>
                        <a
                            href='#!'
                            onClick={() => handleFilter(tag)}
                            className='menu-item'>
                            {capitalize(tag)}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
