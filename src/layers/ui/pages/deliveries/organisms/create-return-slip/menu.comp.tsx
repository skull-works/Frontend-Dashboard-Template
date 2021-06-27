import React from 'react';

import { Button } from "@chakra-ui/react";

import { NavLink, BackArrowIcon } from '../../../../components/customChakra.comp';

interface CreateReturnSlipMenuProps {
    deliveryId: string
}

const CreateReturnSlipMenu: React.FC<CreateReturnSlipMenuProps> = ({ deliveryId }) => {

    return (
        <NavLink to={{ pathname: "/Delivery/Details", search: `?deliveryId=${deliveryId}` }} left={0} w="100%">
            <Button border="0" _hover={{ bg: "teal.500" }} aria-label="back-to-list-deliveries">
                <BackArrowIcon w="20px" h="20px"/>
            </Button>
        </NavLink>
    )
}

export default CreateReturnSlipMenu;