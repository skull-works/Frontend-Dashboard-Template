import * as React from 'react';

import {
    Box,
    Input,
    Button,
    Heading,
    FormControl,
    FormLabel,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react"

export interface CreateItemProps {
    sample?: string
}
 
const CreateItem: React.FC<CreateItemProps> = () => {
    const inputBorderColor = useColorModeValue('gray.600', 'gray.500');

    return (
        <Box
        w='100%'
        pb='20px'
        mx='auto'
        >   
            <title>Create Item</title>
            <Heading fontFamily='Abel'>Create Item</Heading>
            <Stack direction='row' mt='20px' spacing='20px'>
                <Box fontFamily='Abel' w={['50%','50%','50%','30%']} h='90%'>
                    <FormControl fontFamily='Abel' w='100%' h='90%'>
                        <FormLabel fontSize='20px'>Store Name:</FormLabel>
                        <Input w='100%' placeholder='Enter Store Name' _placeholder={{ color: 'gray.500' }}  borderColor={inputBorderColor} />
                    </FormControl>
                    <FormControl fontFamily='Abel' w='100%' h='90%'>
                        <FormLabel fontSize='20px'>Order Type:</FormLabel>
                        <Input w='100%' placeholder='Enter Order Type' _placeholder={{ color: 'gray.500' }}  borderColor={inputBorderColor} />
                    </FormControl>
                    <FormControl fontFamily='Abel' w='100%' h='90%'>
                        <FormLabel fontSize='20px'>Order Amount:</FormLabel>
                        <Input w='100%' placeholder='Enter Order Amount' _placeholder={{ color: 'gray.500' }}  borderColor={inputBorderColor} />
                    </FormControl>
                </Box>
                <Box fontFamily='Abel' w={['50%','50%','50%','30%']} h='90%'>
                <FormControl fontFamily='Abel' w='100%' h='90%'>
                        <FormLabel fontSize='20px'>Store Name:</FormLabel>
                        <Input w='100%' placeholder='Enter Store Name' _placeholder={{ color: 'gray.500' }}  borderColor={inputBorderColor} />
                    </FormControl>
                    <FormControl fontFamily='Abel' w='100%' h='90%'>
                        <FormLabel fontSize='20px'>Order Type:</FormLabel>
                        <Input w='100%' placeholder='Enter Order Type' _placeholder={{ color: 'gray.500' }}  borderColor={inputBorderColor} />
                    </FormControl>
                    <FormControl fontFamily='Abel' w='100%' h='90%'>
                        <FormLabel fontSize='20px'>Order Amount:</FormLabel>
                        <Input w='100%' placeholder='Enter Order Amount' _placeholder={{ color: 'gray.500' }}  borderColor={inputBorderColor} />
                    </FormControl>
                </Box>
            </Stack>
            <Button mt='20px' fontFamily='Abel' bg='blue.500' _hover={{ background: 'blue.400' }}>Submit</Button>
        </Box>
     );
}
 
export default CreateItem;