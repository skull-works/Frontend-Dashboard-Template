import React, { useState, Fragment } from "react";

import { useDisclosure, Box, Button, ChakraProps, useColorModeValue, VStack, IconButton  } from "@chakra-ui/react";

import { CloseIcon, BiApertureIcon, NavLink } from "../../../../components/customChakra.comp";
import deliveryDetailsStore, { IDeliveryDetailsStore } from "../../store/deliveryDetails.store";
import ConfirmationDialog from "./molecule/confirmDialog.molecule";

const Menu = () => {
    const buttonColor = useColorModeValue("gray.800", "teal.400");
    const buttonTextColor = useColorModeValue("gray.800", "teal.400");
    const hoverColor = useColorModeValue("gray.500", "gray.700");
    const menuColor = useColorModeValue("gray.200", "gray.800");

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [show, setShow] = useState(false);
    const setIsEdit = deliveryDetailsStore((state: IDeliveryDetailsStore) => state.setIsEdit);
    const deliveryDetailsID = deliveryDetailsStore((state: IDeliveryDetailsStore) => state.deliveryDetails)?.id;

    const handleEditShow = () => {
        setIsEdit(true);
        setShow(false);
    }

    const BackButton = () => {
        return (
            <NavLink to="/Delivery" left={0} w="100%">
                <Button border="0" _hover={{ color: "teal.500" }} aria-label="back-to-list-deliveries">
                    <CloseIcon w="20px" h="20px" />
                </Button>
            </NavLink>
        )
    }

    const css: ChakraProps["css"] = {
        animation: "example 0.3s ease-in",
        "@keyframes example": {
            from: {marginTop: "-100px"},
            to: {marginTop: "0"}
        },
    };

    return (
        <Fragment>
            { deliveryDetailsID ? <ConfirmationDialog isOpen={isOpen} onClose={onClose} deliveryId={deliveryDetailsID}/> : '' }
            <IconButton border="0" borderColor="gray.600" _hover={{ color: "teal.500" }} aria-label="delivery-details-menu" icon={ <BiApertureIcon h="100%" w="30px" />} onClick={() => setShow(!show)} />
            <BackButton />
            { show ? 
                <Box position="absolute" overflow="hidden" top="130px" right="-2px" boxShadow="3px 5px 5px 0px rgba(0,0,0,0.68)" zIndex="+1">
                    <VStack 
                    w="100%"
                    bg={menuColor}
                    color="gray.200"
                    py="10px"
                    px="10px"
                    borderRadius="4px"
                    boxShadow="3px 5px 5px 0px rgba(0,0,0,0.68)" 
                    listStyleType="none" 
                    fontFamily="Abel" 
                    fontSize="20px"
                    css={css}>
                        <Button w="100%" borderColor={"red.400"} color={"red.400"} _hover={{ bg: hoverColor }} _focus={{ borderColor: 'none' }} onClick={onOpen}>
                            DELETE DELIVERY
                        </Button>
                        <NavLink to={{ pathname: "/Delivery/ReturnSlip/create", search: `?deliveryId=${deliveryDetailsID}`}} left={0} w="100%">
                            <Button w="100%" borderColor={buttonColor} color={buttonTextColor} _hover={{ bg: hoverColor }}>
                                Create Return Slip
                            </Button>
                        </NavLink>
                        <Button w="100%" borderColor={buttonColor} color={buttonTextColor} _hover={{ bg: hoverColor }} onClick={handleEditShow}>
                            Update Delivery Details
                        </Button>
                    </VStack>
                </Box>
                :
                ""
            }
        </Fragment>
    )
}

export default Menu;