import React, { Fragment, useState } from "react";

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
    Stack,
    Checkbox,
} from "@chakra-ui/react"

import { StandardUseColor } from "../../../../../../theme/use-color.theme";
import Datepicker from "../../../../components/datePicker.comp";
import CustomTextField from "../../../../components/textField.comp";
import listDeliveriesStore, { IListDeliveriesStore } from "../../store/listDeliveries.store";


export interface FilterFormProps {
    sample?: string;
}
 
const FilterForm: React.FC<FilterFormProps> = () => {
    const setFilters = listDeliveriesStore((state: IListDeliveriesStore) => state.setFilters);

    const { buttonColor, hoverColor } = StandardUseColor();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isDrNumber, setIsDrNumber] = useState(false);
    const [inputs, setInputs] = useState({});

    const handleCheck = () => {
        setIsDrNumber(!isDrNumber);
    }

    const handleClose = () => {
        setIsDrNumber(false);
        onClose();
    }

    const handleFilter = () => {
        setFilters(inputs);
        setInputs({});
        handleClose();
    }
    
    return (
        <>
        <Button
        w={["60px", "60px", "70px"]}
        h={["30px", "30px", "40px"]}
        fontFamily="Abel" 
        borderColor={buttonColor} 
        _hover={{background: hoverColor, color: 'gray.200'}}
        _focus={{borderColor: hoverColor}} 
        onClick={onOpen}>
            Filter
        </Button>

        <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontFamily="Abel" >Filter Deliveries</ModalHeader>
                <ModalCloseButton _focus={{borderColor: hoverColor}}  />
                <ModalBody fontFamily="Abel" >
                    <Stack direction="column" spacing="6">
                        <Checkbox onChange={handleCheck}>Apply delivery number</Checkbox>
                        { isDrNumber ? 
                            <CustomTextField id='deliveryNumber' placeholder="Delivery Number" setInputs={setInputs} />
                        :   
                            <Fragment>
                                <Stack direction={["column", "row"]} spacing={["4", "4"]}>
                                    <Datepicker label="Start Date:" id='startDate' setInputs={setInputs}/>
                                    <Datepicker label="End Date:" id='endDate' setInputs={setInputs}/>
                                </Stack>
                                <CustomTextField id='store' placeholder="Enter Store" setInputs={setInputs} />
                            </Fragment>
                        }
                    </Stack>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="green" onClick={handleFilter}>
                        Search
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

const MemoFilterForm = React.memo(FilterForm);
 
export default MemoFilterForm;