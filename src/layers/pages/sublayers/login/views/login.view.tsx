import * as React from "react";
import {
    Box, 
    Flex, 
    Stack, 
    Image,
    FormControl,
    Input,
    Heading,
    Button,
    Avatar,
    useColorModeValue,
} from "@chakra-ui/react"
import { LockIcon } from '@chakra-ui/icons'

import LoginSVG from "../../../../../assets/images/loginv2.svg";

export interface LoginFormProps {
    sample?: string;
}
 
const LoginForm: React.FC<LoginFormProps> = ({ sample }) => {
    const LoginFormColor = useColorModeValue('blue.400', 'teal.600');
    return ( 
        <>
            <title>Login</title>
            <Flex w='100%' h='100%' alignItems='center' justifyContent='center'>
                <Flex position='relative' w={["90%","90%","80%","60%"]} py={["16","16","16","16"]} rounded="md" bg={LoginFormColor} boxShadow="dark-lg">
                    <Avatar 
                    position='absolute'
                    top='-10'
                    left={['37%','43%','45%','45%']}
                    w='80px'
                    h='80px'
                    src="https://bit.ly/broken-link" />
                    <Flex direction='row' w='90%' mx='auto' alignItems='center'>
                        <Box w='60%' display={['none','none','flex']}>
                            <Image  
                            boxSize="100%"
                            objectFit="cover"
                            src={LoginSVG} alt="login" />
                        </Box>
                        <Stack
                        w={['100%','100%','40%','40%']}
                        direction='column' 
                        align='center' 
                        spacing='6'
                        fontFamily='Abel'>
                            <Heading color='black' fontFamily='Abel' fontSize='30px' textAlign='center'>User Login</Heading>
                            <FormControl fontFamily='Abel' w='80%' rounded='sm' bg='gray.300' boxShadow="inner">
                                <Avatar position='absolute' zIndex={2} h={6} w={6} top='2' left='1' src="https://bit.ly/broken-link" />
                                <Input 
                                w='100%'
                                pl='35px'
                                placeholder='Username' 
                                _placeholder={{ color: 'gray.500' }} 
                                color='black' 
                                borderRadius='0' 
                                focusBorderColor="gray.700"/>
                            </FormControl>
                            <FormControl position='relative' fontFamily='Abel' w='80%' rounded='sm' bg='gray.300' boxShadow="inner">
                                <LockIcon position='absolute' zIndex={2} h={6} w={6} top='2' left='1' color='gray.500'  />
                                <Input
                                w='100%'
                                pl='35px'
                                type='password'
                                placeholder='Password'
                                _placeholder={{ color: 'gray.500' }} 
                                color='black' 
                                borderRadius='0' 
                                focusBorderColor="gray.700" />
                            </FormControl>
                            <Button w='80%' color='white' bg='green.500' _hover={{backgroundColor: 'green.400'}}>
                                Login
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Flex>
        </>
     );
}
 
export default LoginForm;