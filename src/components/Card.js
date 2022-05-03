import React from 'react';
import {Box, Text} from '@chakra-ui/react'; 

const Card = ({item}) => {
    console.log('item', item)
    return (
        <Box p={2} m={2} display='flex' flexDirection='column' borderRadius={5} position='relative' bg='#cfe8e4'>
            <img src={item?.selectedFile} alt={item?.name} width={250} height={500} />
            <Text color='#ffffff' position='absolute' top={3} left={3} fontSize={14}><b>{item?.creator}</b></Text>
            {item?.tags?.map((item) => (
                <Box display='flex' >
                    <Text>{item}</Text>
                </Box>
            ))}
            <Text>{item?.message}</Text>
        </Box>
    )
}

export default Card;