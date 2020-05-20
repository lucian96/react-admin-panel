import React from 'react';

function PostItem(props){
    const {userId, id, title, body} = props;
    return(
        <div>
            <p>{userId}</p>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}

export default PostItem;