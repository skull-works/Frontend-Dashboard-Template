import React, { ReactNode, Fragment } from 'react';

import {
    Box, 
    Divider, 
    Flex, 
    Heading,
    Stack,
    Avatar, 
  } from "@chakra-ui/react"

import AvatarImage from "../../../../assets/images/avatar.jpg";

 export interface CommonPagelayoutProps {
     children: {
        leftHeader?: ReactNode 
        rightheader?: ReactNode
        content: ReactNode
     }
 }

const CommonPagelayout: React.FC<CommonPagelayoutProps> = (props: CommonPagelayoutProps) => {
    return ( 
        <Box w={['92%','84%']} h='100%' mx='auto' position="relative">
            <Box w={['94%','100%']} mx='auto'>
                <Flex justifyContent='space-between'>
                    <Stack direction='row' mt={['20','16']}>
                        {
                            props.children.leftHeader ? 
                                props.children.leftHeader
                            : 
                            <Fragment>
                                <Avatar w={['40px', '40px', '50px']} h={['40px', '40px', '50px']} src={AvatarImage} />
                                <Heading fontFamily='Abel' mt={['20','16']} ml='' textAlign='left' fontSize={['25px', '25px', '40px']}>Good Day, User</Heading>
                            </Fragment>
                        }
                    </Stack>
                    {props.children.rightheader}
                </Flex>
                <Divider w='100%' h='0.2vh' mt='4' bg='gray.600' />
            </Box>
            {props.children.content}
        </Box>
     );
}
 
export default CommonPagelayout;