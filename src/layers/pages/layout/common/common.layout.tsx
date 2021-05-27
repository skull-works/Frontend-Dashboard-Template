import React, { ReactNode } from 'react';

import {
    Box, 
    Divider, 
    Flex, 
    Heading,
    Stack,
    Avatar, 
  } from "@chakra-ui/react"

 export interface CommonPagelayoutProps {
     children: {
        header?: ReactNode
        content: ReactNode
     }
 }

const CommonPagelayout: React.FC<CommonPagelayoutProps> = (props: CommonPagelayoutProps) => {
    return ( 
        <Box w={['100%','84%']} h='100%' mx='auto'>
            <Box w={['94%','100%']} mx='auto'>
                <Flex justifyContent='space-between'>
                    <Stack direction='row' mt={['20','16']}>
                        <Avatar w={['40px', '40px', '50px']} h={['40px', '40px', '50px']} src="https://bit.ly/broken-link" />
                        <Heading fontFamily='Abel' mt={['20','16']} ml='' textAlign='left' fontSize={['25px', '25px', '40px']}>Good Day, User</Heading>
                    </Stack>
                    {props.children.header}
                </Flex>
                <Divider w='100%' h='0.2vh' mt='4' bg='gray.600' />
            </Box>
            {props.children.content}
        </Box>
     );
}
 
export default CommonPagelayout;