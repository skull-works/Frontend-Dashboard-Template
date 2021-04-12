import * as React from 'react';

import {
    Box,
    Input,
    Button,
    Heading,
    FormControl,
    FormLabel,
    Stack,
} from "@chakra-ui/react"

export interface CreateItemProps {
    sample?: string
}
 
const CreateItem: React.FC<CreateItemProps> = () => {
    return ( 
        <Box
        w='100%'
        mx='auto'
        bg='gray.600'
        >
            <Heading fontFamily='Abel'>Create Item</Heading>
            <Stack direction='row' mt='20px' spacing='20px'>
                <FormControl fontFamily='Abel' w='370px' h='90%'>
                    <FormLabel fontSize='20px'>Store Name:</FormLabel>
                    <Input w='90%' placeholder='Store Name'/>
                    <FormLabel fontSize='20px' mt='10px'>Order Type:</FormLabel>
                    <Input w='90%' placeholder='Order Type'/>
                    <FormLabel fontSize='20px' mt='10px'>Store Name:</FormLabel>
                    <Input w='90%' placeholder='Store Name'/>
                    <FormLabel fontSize='20px' mt='10px'>Order Type:</FormLabel>
                    <Input w='90%' placeholder='Order Type'/>
                </FormControl>
                <FormControl fontFamily='Abel' w='370px' h='90%'>
                    <FormLabel fontSize='20px'>Store Name:</FormLabel>
                    <Input w='90%' placeholder='Store Name'/>
                    <FormLabel fontSize='20px' mt='10px'>Order Type:</FormLabel>
                    <Input w='90%' placeholder='Order Type'/>
                    <FormLabel fontSize='20px' mt='10px'>Store Name:</FormLabel>
                    <Input w='90%' placeholder='Store Name'/>
                    <FormLabel fontSize='20px' mt='10px'>Order Type:</FormLabel>
                    <Input w='90%' placeholder='Order Type'/>
                </FormControl>
            </Stack>
            <Button mt='20px' fontFamily='Abel' bg='blue.500' _hover={{ background: 'green.500' }}>Submit</Button>
        </Box>
     );
}
 
export default CreateItem;