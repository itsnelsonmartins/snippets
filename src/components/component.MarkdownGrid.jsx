import React, { useState, useEffect } from 'react';
import Modal from './component.Modal';

const MarkdownGrid = ({ data, filter }) => {
    const [alertIndex, setAlertIndex] = useState(-1);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlertIndex(-1);
        }, 1500);
        return () => clearTimeout(timeout);
    }, [alertIndex]);

    const filteredSnippets = filter
        ? data.snippets.filter(
              (file) =>
                  file.name.toLowerCase().includes(filter.toLowerCase()) ||
                  file.content.toLowerCase().includes(filter.toLowerCase()) ||
                  file.tags.some((tag) =>
                      tag.toLowerCase().includes(filter.toLowerCase())
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
                    {alertIndex === index && <Modal placeholder={`Copied!`} />}
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

export default MarkdownGrid;
