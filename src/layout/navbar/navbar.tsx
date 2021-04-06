import React, { useState, useEffect } from 'react';

import {
    Flex,
    ListItem,
    UnorderedList,
    Divider,
    Text,
    ScaleFade,
    Slide,
    useDisclosure,
    useColorModeValue,
 } from "@chakra-ui/react"
 
import { CloseIcon } from '@chakra-ui/icons'

import { Logo } from "../../Logo"
import NavbarLinks from './links';


const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure()
    const navBarTextColor = useColorModeValue('teal.700', 'white')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
       window.addEventListener('resize', handleResize)
       return () => {
           window.removeEventListener('resize', handleResize)
       }
    }, [])

    const TransitionWrapper = (props: any) => {
        if (windowWidth < 480) {
            return(
                <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
                    {props.children}
                </Slide>
            );
            
        } 
        
        return (
            <ScaleFade initialScale={0.9} in={isOpen}>
                {props.children}
            </ScaleFade>
        )
    }

    if (isOpen) {
        return ( 
            <TransitionWrapper>
                <UnorderedList 
                w={['100%', '160px']}
                py='6'
                bg='blue.800'
                mx={['auto']}
                position='fixed'
                top={['0','360']}
                left={['0','4']}
                rounded={['','2xl','2xl','2xl']} 
                color='white'
                fontSize='17px'
                fontFamily='Kiwi Maru'
                listStyleType='none'
                textAlign='center'
                spacing='3'>
                    <CloseIcon 
                    w='10px' 
                    position='absolute' 
                    top='0' 
                    left='0'
                    mt='10px'
                    ml='10px'
                    cursor='pointer' 
                    _hover={{color: "teal.500"}}
                    onClick={onToggle}
                    />
                    <ListItem>
                        <Logo h='80px' mx='auto' pointerEvents="none" />
                    </ListItem>
                    <Divider w='80%' mx='auto' />
                    <NavbarLinks />
                </UnorderedList>
            </TransitionWrapper>
        );
    }

    return (
        <Flex 
        direction={['row','column']}
        bg={['']}
        border='1px'
        borderColor="teal.700"
        w={['160px','50px']}
        h={['30px', 'auto']}
        my={['', 'auto']} 
        position='fixed'
        roundedRight={['','lg']}
        rounded={['sm','']}
        py={['6px','10px']}
        marginTop={["2", "400"]}
        marginLeft={["2","0"]}
        color={navBarTextColor}
        fontSize={['10px','12px']}
        fontFamily='Kiwi Maru'
        textAlign='center'
        justifyContent={['center','']}
        cursor='pointer'
        _hover={{color: "teal.500"}}
        onClick={onToggle}>
            <Text pb={['','4px']} px={['2px']}>N</Text>
            <Text pb={['','4px']} px={['2px']}>A</Text>
            <Text pb={['','4px']} px={['2px']}>V</Text>
            <Text pb={['','4px']} px={['2px']}>I</Text>
            <Text pb={['','4px']} px={['2px']}>G</Text>
            <Text pb={['','4px']} px={['2px']}>A</Text>
            <Text pb={['','4px']} px={['2px']}>T</Text>
            <Text pb={['','4px']} px={['2px']}>E</Text>
        </Flex>
    )
}
 
export default Navbar;