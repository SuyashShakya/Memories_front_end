import * as React from 'react';
import {Box, Text, Button} from '@chakra-ui/react';
import { useHistory } from "react-router-dom";

const AppBar = () => {
    const history = useHistory();
    const onCreateNewPost = () => {
        history.push('/new-post')
    }
    return (
        <Box 
            px={5} 
            display='flex' 
            height='50px' 
            width=' 100%' 
            alignItems='center'
            justifyContent='space-between' 
            backgroundColor='#7a6630'
        >
            <Text
                color='#ffffff' 
                fontSize={16} 
                justifySelf='center' 
                sx={{cursor: 'pointer'}} 
                onClick={() => history.push('/')}
            >
                <b>Memories</b>
            </Text>
            <Button colorScheme='blue' onClick={onCreateNewPost}>Create New Post</Button>
        </Box>       
    )
}

export default AppBar;