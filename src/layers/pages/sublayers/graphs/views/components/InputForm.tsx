import * as React from 'react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    Input,
    FormControl,
    FormLabel,
  } from "@chakra-ui/react"

  import Datepicker from '../../../../components/DatePicker';

 
const InputForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const inputBorderColor = useColorModeValue('gray.500', 'gray.600')
    
    return (
        <>
        <Button
        w={['60px', '60px', '70px']}
        h={['30px', '30px', '46px']}
        colorScheme="blue" 
        fontFamily='Abel' 
        _hover={{backgroundColor: 'blue.300', color: 'white'}}
        onClick={onOpen}>
            Filter
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Filter Data</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Stack direction='column' spacing='6'>
                    <Stack direction={['column', 'row']} spacing={['4', '20']}>
                        <FormControl>
                            <FormLabel>Start Date :</FormLabel>
                            <Datepicker />
                        </FormControl>
                        <FormControl>
                            <FormLabel>End Date :</FormLabel>
                            <Datepicker />
                        </FormControl>
                    </Stack>
                    <Input placeholder="Store" mb='2px' borderColor={inputBorderColor} _hover={{borderColor: 'blue.400'}} />
                    <Input placeholder="Size" mb='2px' borderColor={inputBorderColor} _hover={{borderColor: 'blue.400'}} />
                </Stack>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button colorScheme="blue" onClick={onClose}>
                    Filter
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}
 
export default InputForm;