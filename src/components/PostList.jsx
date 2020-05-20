import React from 'react';
import PostItem from './PostItem'

class PostList extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                {   
                    this.props.posts !== null
                        ? this.props.posts.map((post,index) => {
                            return <PostItem 
                                    userId={post.userId}
                                    id={post.id}
                                    title={post.title}
                                    body={post.body}
                                    key={index}
                                    />
                            })
                        : null
                }
            </div>
        );      
    }
}

export default PostList;