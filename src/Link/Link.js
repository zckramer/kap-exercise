import React from 'react';

const link = (url, textToDisplay) => {
    return (
    <div>
        <a href={url}>{textToDisplay}</a>
    </div>
    )
}

export default link;