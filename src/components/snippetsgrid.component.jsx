import { useContext } from 'react';
import { ContextApi } from '../ContextApi';

const SnippetsGrid = ({ data }) => {
    const { search, theme } = useContext(ContextApi);
    const [searchValue, setSearchValue] = search;
    const [themeValue, setThemeValue] = theme;

    const filteredSnippets = searchValue
        ? data.snippets.filter(
              (file) =>
                  file.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                  file.content
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                  file.tags.some((tag) =>
                      tag.toLowerCase().includes(searchValue.toLowerCase())
                  )
          )
        : data.snippets;

    return (
        <div className='columns is-multiline'>
            {filteredSnippets.map((file, index) => (
                <div className='column is-6' key={index}>
                    <div className='box'>
                        <p className='title desc'>{file.name}</p>
                        <pre className='hasContent'>
                            <code>{file.content}</code>
                        </pre>
                        <div>
                            {file.tags.map((tag, tagIndex) => (
                                <p className='tag is-dark' key={tagIndex}>
                                    #{tag}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SnippetsGrid;
