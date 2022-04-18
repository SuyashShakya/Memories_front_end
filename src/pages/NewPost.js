import * as React from 'react';
import { Container, Text, Input, Textarea, Button } from '@chakra-ui/react'
import FileBase from 'react-file-base64';
import { useForm } from "react-hook-form";

const NewPost = () => {
    const [selectedFile, setSelectedFile] = React.useState('');
    const [tags, setTags] = React.useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const dataToBeSent={...data, selectedFile, tags: tags.split(',')}
        console.log('data', dataToBeSent);
    }    

    return (
        <Container maxW='md'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <Text fontSize='2xl'>Creating a Memory</Text>
                <br />
                <Input placeholder='Creator' {...register('creator')} />
                <br /><br />
                <Input placeholder='Title' {...register('title')}/>
                <br /> <br />
                <Textarea placeholder='Message' {...register('message')} />
                <br /> <br />
                <Input placeholder='Tags (coma separated)' onChange={(e)  => setTags(e.target.value)} />
                <br /> <br />
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setSelectedFile(base64)} />
                <br /> <br />
                <Button type='submit' colorScheme='blue' mr={3}>Submit</Button>
                <Button colorScheme='red'>Reset</Button>
            </form>
        </Container>
    )
}

export default NewPost;;

