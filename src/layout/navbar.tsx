import React, { useState } from 'react';

import { 
    Flex,
    ListItem,
    UnorderedList,
    Divider,
    Text,
    ScaleFade,
 } from "@chakra-ui/react"
 
 import { CloseIcon } from '@chakra-ui/icons'

 import { Logo } from "../Logo"

export interface NavbarProps {
    
}
 
const Navbar: React.FC<NavbarProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleShowNav = () => {
        setIsOpen(!isOpen);
    }

    if (isOpen) {
        return ( 
            <ScaleFade initialScale={0.9} in={isOpen}>
                <Flex w='160px' h='100vh'>
                    <UnorderedList 
                    w='100%'
                    my='auto'
                    py='6'
                    bg='blue.800'
                    position='relative' 
                    rounded='2xl' 
                    color='white'
                    fontSize='17px'
                    listStyleType='none'
                    textAlign='center'
                    spacing='3'>
                        <CloseIcon 
                        w='10px' 
                        position='absolute' 
                        top='0' 
                        right='0' 
                        mt='10px'
                        mr='10px'
                        cursor='pointer' 
                        _hover={{color: "teal.500"}}
                        onClick={handleShowNav}
                        />
                        <ListItem>
                            <Logo h='80px' mx='auto' pointerEvents="none" />
                        </ListItem>
                        <Divider w='80%' mx='auto' />
                        <ListItem cursor='pointer' _hover={{color: "teal.500"}}>Main</ListItem>
                        <ListItem cursor='pointer' _hover={{color: "teal.500"}}>Inventory</ListItem>
                        <ListItem cursor='pointer' _hover={{color: "teal.500"}}>Stocks</ListItem>
                    </UnorderedList>
                </Flex>
            </ScaleFade>
        );
    } 

    return (
        <Flex h='100vh'>
            <Flex w='50px' 
                bg='gray.900' 
                my='auto' 
                position='relative' 
                direction='column' 
                roundedRight='lg' 
                py='10px' 
                color='white'
                textAlign='center' 
                cursor='pointer'
                _hover={{color: "teal.500"}}
                onClick={handleShowNav} >
                    <Text>O</Text>
                    <Text>P</Text>
                    <Text>E</Text>
                    <Text>N</Text>
            </Flex>
        </Flex>
    )
}
 
export default Navbar;