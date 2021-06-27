import { IDelivery, IInputsDeliveryCreation, IFilterOrders, IDeliveryOrderReturnSlip } from "./types/delivery.types";
import { 
    getDeliveriesReq,
     createDeliveryReq, 
    getDeliveryReq, 
    updateDeliveryDetailsReq, 
    updateReturnSlipReq,
    deleteDeliveryReq,
} from '../../../api/deliveries/deliveries.api';

export const getDeliveries = async (filters: IFilterOrders): Promise<IDelivery[] | undefined> => {
    try {
        const deliveries = await getDeliveriesReq(filters);
        return deliveries;
    } catch (err) {
        console.log(err);
    }
}

export const createDelivery = async (data: IInputsDeliveryCreation) => {
    try {
        const sendData = {
            store: data.store,
            deliveryNumber: data.deliveryNumber,
            amount: 0,
            deliveryNumberOrders: data.orders
        } as IDelivery;
        const delivery = await createDeliveryReq(sendData);
        if (delivery)
            return true;
        else
            return false;
    } catch (err) {
        console.log(err);
    }
}

export const getDeliveryDetails = async (id: string): Promise<IDelivery | null> => {
    try {
        const delivery = await getDeliveryReq(id);
        return delivery;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export const updateDeliveryDetails = async (id: number, data: IDelivery) => {
    try {
        const delivery = await updateDeliveryDetailsReq(id, data);
        return delivery;
    } catch (err) {
        console.log(err);
    }
}

export const updateReturnSlip = async (id: string, data: IDeliveryOrderReturnSlip) => {
    try {
        const delivery = await updateReturnSlipReq(id, data);
        return delivery;
    } catch (err) {
        console.log(err);
    }
}

export const deleteDelivery = async (id: number) => {
    try {
        const isDeleted = await deleteDeliveryReq(id);
        return isDeleted;
    } catch (err) {
        console.log(err);
    }
}