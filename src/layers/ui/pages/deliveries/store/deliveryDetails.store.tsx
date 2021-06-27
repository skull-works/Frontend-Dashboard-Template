import create, { SetState } from "zustand";
import { devtools } from 'zustand/middleware'

import { IDelivery, IDeliveryOrderReturnSlip } from '../types/delivery.types';
import { getDeliveryDetails, updateDeliveryDetails } from '../delivery.service';

const resolveDeductions = (value: number | undefined) => {
    return value ? value : 0;
}

const calculateResult = (delivery: IDelivery) => {
    const { amount, badOrder, widthHoldingTax, otherDeductions, amountPaid } = delivery;
    let totalAmountDue = 0;
    let paidDifference = null;
    let paymentStatus = amountPaid && amountPaid > 0 ? 'PAID' : 'UNPAID';

    if (amount && (badOrder || widthHoldingTax || otherDeductions))
        totalAmountDue = amount - (resolveDeductions(badOrder)   + resolveDeductions(widthHoldingTax) + resolveDeductions(otherDeductions));
    
    if (totalAmountDue > 0 && amountPaid)
        paidDifference = amountPaid - totalAmountDue;

    return { totalAmountDue, paidDifference, paymentStatus };
}

interface FetchDeliveryDetailsInput {
    deliveryId: string;
}

interface UpdateDeliveryDetailsInput {
    deliveryId: number;
    formData: IDelivery;
}

export interface IDeliveryDetailsStore {
    deliveryDetails: IDelivery | null;
    ordersFromRS: IDeliveryOrderReturnSlip[];
    totalAmountDue: number;
    paidDifference: number | null;
    paymentStatus: string;
    isEdit: boolean;
    setIsEdit: (state: boolean) => void;
    fetchDeliveryDetails: (params: FetchDeliveryDetailsInput) => Promise<void>;
    updateDeliveryDetails: (params: UpdateDeliveryDetailsInput) => any;
    resetStates: () => void;
}

let deliveryDetailsStore = devtools((set: any) => {
    const setState: SetState<IDeliveryDetailsStore> = set;

    const initialStates = {
        deliveryDetails: null,
        
        ordersFromRS: [],

        totalAmountDue: 0,

        paidDifference: null,

        paymentStatus: 'UNPAID',

        isEdit: false,
    }

    const store: IDeliveryDetailsStore = {
        ...initialStates,

        setIsEdit: (state: boolean) => {
            setState({ isEdit: state })
        },

        fetchDeliveryDetails: async (params: FetchDeliveryDetailsInput) => {
            const { deliveryId } = params;

            const delivery = await getDeliveryDetails(deliveryId);

            if (delivery) {
                const { totalAmountDue, paidDifference, paymentStatus } = calculateResult(delivery);
                
                setState({ totalAmountDue });
                setState({ paidDifference });
                setState({ paymentStatus });
            }

            setState({ deliveryDetails: delivery });
            if (delivery?.returnSlip) setState({ ordersFromRS: [...delivery.returnSlip] });
        },

        updateDeliveryDetails: async (params: UpdateDeliveryDetailsInput) => {
            const { deliveryId, formData } = params;
            
            const delivery: IDelivery = await updateDeliveryDetails(deliveryId, formData);
            
            if (delivery) {
                const { totalAmountDue, paidDifference, paymentStatus } = calculateResult(delivery);
                
                setState({ totalAmountDue });
                setState({ paidDifference });
                setState({ paymentStatus });
                setState({ deliveryDetails: { ...delivery } });
            }

            return delivery;
        },

        resetStates: () => {
            setState({ ...initialStates })
        }
    }
    
    return store;
})

export default deliveryDetailsStore = create(deliveryDetailsStore);