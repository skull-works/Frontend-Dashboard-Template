import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    useToast,
    Button, 
    Heading, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay,
} from '@chakra-ui/react';

import { deleteDelivery } from '../../../delivery.service';
import { WarningIcon } from '@chakra-ui/icons';

export interface ConfirmationDialogProps {
    isOpen: boolean;
    onClose: () => void;
    deliveryId: number;
}

const toastSuccess = {
    title: "Successfuly deleted delivery",
    status: "success",
    duration: 5000,
    isClosable: true,
};

const toastError = {
    title: "Failed to delete delivery",
    status: "error",
    duration: 5000,
    isClosable: true,
};
 
const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ isOpen, onClose, deliveryId }) => {
    const toast = useToast()
    const history = useHistory();

    const handleDeleteDelivery = async () => {
        const isDeleted = await deleteDelivery(deliveryId);
        if (isDeleted) toast(toastSuccess as any);
        else toast(toastError as any);
        onClose();
        history.replace({ pathname: `/Delivery` })
    }
    
    return ( 
        <>
        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader color="red.400" display="flex" flexDir="row">
                <WarningIcon w={7} h={7} color="red.500" />
                <Heading ml="8px" fontFamily="Abel" fontSize="25px">Warning</Heading>
            </ModalHeader>
            <ModalCloseButton _focus={{ borderColor: 'none' }}/>
            <ModalBody>
                Are you sure you want to delete this delivery?
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="blue" variant="outline" mr={3} onClick={onClose}>
                Cancel
                </Button>
                <Button colorScheme="red" variant="outline" onClick={handleDeleteDelivery}>Yes</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
     );
}
 
export default ConfirmationDialog;