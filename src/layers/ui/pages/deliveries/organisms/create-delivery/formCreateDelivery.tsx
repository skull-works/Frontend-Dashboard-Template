import React, { useState } from "react";

import {
    Box,
    Heading,
    Button,
    useToast,
    Flex,
} from "@chakra-ui/react"

import Form from "@rjsf/core";

import { StandardUseColor } from '../../../../../../theme/use-color.theme';
import ThreeDotLoader from "../../../../components/loaders/dotsMoving";
import { schema, uischema } from './react-form-templates/createDelivery.template';
import ArrayFieldTemplate from '../../../../react-forms/form-templates/array-field.template';
import ObjectFieldTemplate from '../../../../react-forms/form-templates/object-field.template';
import { createDelivery } from '../../delivery.service';

const toastSuccess = {
    title: "Successfuly created delivery",
    status: "success",
    duration: 5000,
    isClosable: true,
};

const toastError = {
    title: "Failed to create delivery",
    status: "error",
    duration: 5000,
    isClosable: true,
};

const SubmitLoader = () => {
    return (
        <Flex w="100%" py='30px' justifyContent="center" alignItems="center">
            <Heading fontFamily="Abel" fontSize={["20px","20px","40px","40px"]}>Creating Delivery</Heading>
            <ThreeDotLoader />
        </Flex>
    )
}

export interface FormCreateDeliveryProps {
    
}
 
const FormCreateDelivery: React.FC<FormCreateDeliveryProps> = () => {
    const { buttonColor, hoverColor } = StandardUseColor();
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit: any = async ({formData}: { formData:any }) => {
        setIsLoading(true);
        const delivery = await createDelivery(formData);
        if (delivery) {
            toast(toastSuccess as any);}
        else 
            toast(toastError as any);
        setIsLoading(false);
    };

    if (isLoading)
        return (<SubmitLoader />)
    
    return ( 
        <Box
        w="100%"
        pb="20px"
        mx="auto"
        >
            <Heading fontFamily="Abel" paddingBottom="20px">Create Delivery</Heading>
            <Form 
            schema={schema} 
            uiSchema={uischema} 
            ObjectFieldTemplate={ObjectFieldTemplate} 
            ArrayFieldTemplate={ArrayFieldTemplate}
            onSubmit={onSubmit}>
                <Button 
                color='white' 
                bg={buttonColor} 
                type="submit" 
                fontFamily="Abel" 
                marginTop="30px"
                float="right"
                _hover={{background: hoverColor}}>SUBMIT ORDER</Button>
            </Form>
        </Box>
     );
}

const MemoFormCreateDelivery = React.memo(FormCreateDelivery);
 
export default MemoFormCreateDelivery;