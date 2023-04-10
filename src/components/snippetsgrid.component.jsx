import { useContext } from 'react';
import { ContextApi } from '../ContextApi';

const SnippetsGrid = ({ data }) => {
    const { search, setSearch } = useContext(ContextApi);

    const filteredSnippets = search
        ? data.snippets.filter(
              (file) =>
                  file.name.toLowerCase().includes(search.toLowerCase()) ||
                  file.content.toLowerCase().includes(search.toLowerCase()) ||
                  file.tags.some((tag) =>
                      tag.toLowerCase().includes(search.toLowerCase())
                  )
          )
        : data.snippets;

    return (
        <>
            {filteredSnippets.map((file, index) => (
                <div
                    className='markdown-cell rad-shadow'
                    key={index}
                    onClick={() => {
                        setAlertIndex(index);
                        navigator.clipboard.writeText(file.content);
                    }}>
                    <p className='title'>{file.name}</p>
                    <p>{file.content}</p>
                    <div>
                        {file.tags.map((tag, tagIndex) => (
                            <p className='tag' key={tagIndex}>
                                #{tag}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default SnippetsGrid;
