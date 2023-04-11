import { useContext, useState, useEffect } from 'react';
import { ContextApi } from '../ContextApi';

const SnippetsGrid = ({ data }) => {
    const { search } = useContext(ContextApi);
    const [searchValue, setSearchValue] = search;
    const [alertIndex, setAlertIndex] = useState(-1);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlertIndex(-1);
        }, 500);
        return () => clearTimeout(timeout);
    }, [alertIndex]);

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

    const copyCode = (content) => {
        const code = document.querySelector('.hasContent');
        navigator.clipboard.writeText(content);
    };

    return (
        <div className='columns is-multiline'>
            {filteredSnippets.map((file, index) => (
                <div className='column is-4' key={index}>
                    <div
                        className='box'
                        onClick={() => {
                            setAlertIndex(index);
                            copyCode(file.content);
                        }}>
                        <p className='title is-5 desc'>
                            {file.name}
                            {alertIndex === index && (
                                <span className='info'>Copied!</span>
                            )}
                        </p>
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
