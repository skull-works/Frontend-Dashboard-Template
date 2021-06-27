import { IDelivery, IFilterOrders, IDeliveryOrderReturnSlip } from '../../ui/pages/deliveries/types/delivery.types';
import { createURL } from '../helpers';

export const getDeliveriesReq = async (filters: IFilterOrders): Promise<IDelivery[] | undefined> => {
    try {
        const url = createURL(filters);
        const response = await fetch(url).then(res => res.json());
        const deliveries: IDelivery[] = response.deliveries;
        return deliveries;
    } catch (err) {
        console.log(err);
    }
}

export const createDeliveryReq = async (data: any) => {
    try {
        const response = await fetch('/api/deliveries', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => res.json());
        return response.delivery;
    } catch (err) {
        console.log(err);
    }
}

export const getDeliveryReq = async (id: string) => {
    try {
        const response = await fetch(`/api/deliveries/${id}`).then(res => res.json());
        return response.delivery;
    } catch (err) {
        console.log(err);
    }
}

export const updateDeliveryDetailsReq = async (id: number, data: IDelivery) => {
    try {
        const response = await fetch(`/api/deliveries/${id}`, {
            method:  "PUT",
            body: JSON.stringify(data)
        }).then(res => res.json());
        return response.delivery;
    } catch (err) {
        console.log(err);
    }
}

export const updateReturnSlipReq = async (id: string, data: IDeliveryOrderReturnSlip) => {
    try {
        const response = await fetch(`/api/deliveries/returnSlip/create/${id}`, {
            method:  "POST",
            body: JSON.stringify(data)
        }).then(res => res.json());
        return response.delivery;
    } catch (err) {
        console.log(err);
    }
}

export const deleteDeliveryReq = async (id: number) => {
    try {
        const response = await fetch(`/api/deliveries/${id}`, {
            method:  "DELETE"
        }).then(res => res.json());
        return response.isDeleted;
    } catch (err) {
        console.log(err);
    }
}