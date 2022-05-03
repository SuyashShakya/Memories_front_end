import React from 'react';
import {useSelector} from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import Card from '../components/Card';
import { Box } from '@chakra-ui/react';

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    console.log('posts', posts)
    if(isEmpty(posts)){
        return <>Nothing to show</>
    }
    return (
        <Box display='flex' flexWrap='wrap'>
        {
            posts.map((item) => <Card item={item} />)
        }
        </Box>
    )
}

export default Posts;