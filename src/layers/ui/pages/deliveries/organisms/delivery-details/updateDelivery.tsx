import React, { useState } from "react";
import Form from "@rjsf/core";

import {
    Box,
    Heading,
    Button,
    useToast,
    Flex,
} from "@chakra-ui/react"

import { StandardUseColor } from '../../../../../../theme/use-color.theme';
import ThreeDotLoader from "../../../../components/loaders/dotsMoving";
import { generateSchema, uischema } from './react-form-templates/updateDelivery.template';
import ArrayFieldTemplate from '../../../../react-forms/form-templates/array-field.template';
import ObjectFieldTemplate from '../../../../react-forms/form-templates/object-field.template';
import { IDelivery } from "../../types/delivery.types";
import deliveryDetailsStore, { IDeliveryDetailsStore } from '../../store/deliveryDetails.store';

const toastSuccess = {
    title: "Successfuly updated details",
    status: "success",
    duration: 5000,
    isClosable: true,
};

const toastError = {
    title: "Failed to update details",
    status: "error",
    duration: 5000,
    isClosable: true,
};

const SubmitLoader = () => {
    return (
        <Flex h="50%" w="100%" py='30px' justifyContent="center" alignItems="center">
            <Heading fontFamily="Abel" fontSize={["20px","20px","40px","40px"]}>Updating Delivery Details</Heading>
            <ThreeDotLoader />
        </Flex>
    )
}

export interface UpdateDeliveryProps {
    deliveryDetails: IDelivery;
}
 
const UpdateDelivery: React.FC<UpdateDeliveryProps> = ({ deliveryDetails }) => {
    const { buttonColor, hoverColor } = StandardUseColor();
    const toast = useToast()
    const schema = generateSchema(deliveryDetails);
    
    const [isLoading, setIsLoading] = useState(false);
    const setIsEdit = deliveryDetailsStore((state: IDeliveryDetailsStore) => state.setIsEdit);
    const updateDeliveryDetails = deliveryDetailsStore((state: IDeliveryDetailsStore) => state.updateDeliveryDetails);

    const onSubmit: any = async ({formData}: { formData:any }) => {
        setIsLoading(true);
        const delivery = await updateDeliveryDetails({ deliveryId: deliveryDetails.id, formData });
        if (delivery) toast(toastSuccess as any);
        else toast(toastError as any);
        setIsLoading(false);
        setIsEdit(false);
    };

    const handleCancel = () => {
        setIsEdit(false);
    }

    if (isLoading)
        return (<SubmitLoader />)
    
    return ( 
        <Box
        w="100%"
        pb="20px"
        mx="auto"
        >
            <Heading fontFamily="Abel" mt="50px" pb="50px" textAlign="center">Update Delivery Details</Heading>
            <Form 
            schema={schema} 
            uiSchema={uischema} 
            ObjectFieldTemplate={ObjectFieldTemplate} 
            ArrayFieldTemplate={ArrayFieldTemplate}
            onSubmit={onSubmit}>
                <Button
                type="submit"
                color='white' 
                bg={buttonColor} 
                mt="30px"
                float="right" 
                fontFamily="Abel"
                _hover={{background: hoverColor}}>
                    SUBMIT ORDER
                </Button>
                <Button 
                bg='red.500' 
                mt="30px" 
                mr="20px" 
                float="right" 
                _hover={{background: 'red.400'}} 
                onClick={handleCancel}>
                    CANCEL
                </Button>
            </Form>
        </Box>
     );
}
 
export default UpdateDelivery;