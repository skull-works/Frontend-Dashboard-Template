import React, { Fragment } from 'react';

import {
    Box,
    Stack,
} from "@chakra-ui/react"
import { ArrowBackIcon } from '@chakra-ui/icons'

import { StandardUseColor } from '../../../../../theme/use-color.theme';
import CommonPagelayout from '../../../layout/common/common.layout';
import FormCreateDelivery from '../organisms/create-delivery/formCreateDelivery';
import { NavLink } from '../../../components/customChakra.comp';

export interface CreateDeliveryProps {
    sample?: string
}
 
const CreateDelivery: React.FC<CreateDeliveryProps> = () => {
    const { buttonColor, hoverColor } = StandardUseColor();

    return (
        <CommonPagelayout>
            {{
                content: (
                    <Fragment>
                        <title>Create Delivery | Lafonsas</title>
                        <Box mt='50px' w={['96%','100%','100%','100%']} mx='auto'>
                            <Stack>
                                <NavLink to='/Delivery' 
                                float='left' 
                                w='50px'
                                paddingTop='5px'
                                paddingBottom='5px'
                                borderRadius='5px'
                                bg={buttonColor}
                                mb='20px' 
                                fontFamily='Abel' 
                                textAlign='center'
                                color='white'
                                _hover={{background: hoverColor}}>
                                    <ArrowBackIcon />
                                </NavLink>
                                <FormCreateDelivery />
                            </Stack>
                        </Box>
                    </Fragment>
                )
            }}
        </CommonPagelayout>
     );
}

const MemoCreateDelivery = React.memo(CreateDelivery);
 
export default MemoCreateDelivery;