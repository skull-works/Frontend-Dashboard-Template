import React from 'react';

import { useLocation } from 'react-router-dom';
import { 
    Heading,
    ButtonGroup,
} from '@chakra-ui/react';

import CommonPagelayout from '../../../layout/common/common.layout';
import FallbackView from '../organisms/create-return-slip/fallback.comp';
import CreateReturnSlipMenu from '../organisms/create-return-slip/menu.comp';
import CreateReturnSlipForm from '../organisms/create-return-slip/form.com';
 
const CreateReturnSlip = () => {
    const useQuery = () => new URLSearchParams(useLocation().search);
    let deliveryId = useQuery().get('deliveryId');

    if (deliveryId)
        return ( 
            <CommonPagelayout>
                {{
                    leftHeader: (
                        <Heading fontFamily="Abel" >Create Return Slip</Heading>
                    ),
                    rightheader: (
                        <ButtonGroup variant="outline" spacing='6' mt={['20','16']}>
                                <CreateReturnSlipMenu deliveryId={deliveryId} />
                        </ButtonGroup>
                    ),
                    content: (
                        <CreateReturnSlipForm deliveryId={deliveryId} />
                    )
                }}
            </CommonPagelayout>
        );

    return (<FallbackView />);
}

const MemoCreateReturnSlip = React.memo(CreateReturnSlip);
export default MemoCreateReturnSlip;