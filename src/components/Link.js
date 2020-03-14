import React from 'react';

const link = (url, textToDisplay) => {
    return (
        <a href={url}>{textToDisplay}</a>
    )
}

export default link;