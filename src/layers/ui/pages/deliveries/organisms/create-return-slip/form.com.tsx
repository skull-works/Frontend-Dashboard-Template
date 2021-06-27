import React, { useState } from "react";

import { useHistory } from 'react-router-dom';
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
import { schema, uischema } from './react-form-templates/createReturnSlip.template';
import ArrayFieldTemplate from '../../../../react-forms/form-templates/array-field.template';
import ObjectFieldTemplate from '../../../../react-forms/form-templates/object-field.template';
import { updateReturnSlip } from '../../delivery.service';

const toastSuccess = {
    title: "Successfuly created return slip",
    status: "success",
    duration: 5000,
    isClosable: true,
};

const toastError = {
    title: "Failed to create return slip",
    status: "error",
    duration: 5000,
    isClosable: true,
};

const SubmitLoader = () => {
    return (
        <Flex h="50%" w="100%" py='30px' justifyContent="center" alignItems="center">
            <Heading fontFamily="Abel" fontSize={["20px","20px","40px","40px"]}>Creating Return Slip</Heading>
            <ThreeDotLoader />
        </Flex>
    )
}

export interface CreateReturnSlipFormProps {
    deliveryId: string;
}
 
const CreateReturnSlipForm: React.FC<CreateReturnSlipFormProps> = ({ deliveryId }) => {
    const { buttonColor, hoverColor } = StandardUseColor();
    const history = useHistory();
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit: any = async ({formData}: { formData:any }) => {
        setIsLoading(true);
        const delivery = await updateReturnSlip(deliveryId, formData);
        setIsLoading(false);
        if (delivery) {
            history.replace({ pathname: `/Delivery/Details`, search: `?deliveryId=${deliveryId}` })
            toast(toastSuccess as any);
        }
        else 
            toast(toastError as any);
    };

    if (isLoading)
        return (<SubmitLoader />)
    
    return ( 
        <Box
        mt="40px"
        w="100%"
        pb="20px"
        mx="auto"
        >
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
                _hover={{background: hoverColor}}>SUBMIT</Button>
            </Form>
        </Box>
     );
}

const MemoCreateReturnSlipForm = React.memo(CreateReturnSlipForm);
 
export default MemoCreateReturnSlipForm;