import React from 'react';
import {useSelector} from 'react-redux';

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    return <>Posts</>
}

export default Posts;