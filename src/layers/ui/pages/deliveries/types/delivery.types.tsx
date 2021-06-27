export interface IDelivery {
    id: number,
    store: string,
    postingDate: string,
    deliveryNumber: string,
    amount: number
    badOrder?: number;
    widthHoldingTax?: number;
    otherDeductions?: number;
    amountPaid?: number;
    checkNumber?: string;
    checkDate?: string;
    deliveryNumberOrders: IOrder[]; 
    returnSlip?: IDeliveryOrderReturnSlip[];
}

export interface IInputsDeliveryCreation {
    store: string,
    deliveryNumber: string,
    orders: IOrder[]
}

export interface IOrder {
    size: string;
    quantity: number;
    price: number;
}

export interface IDeliveryOrderReturnSlip {
    quantity: number;
    size: string;
    price: number;
}

export interface IFilterOrders { 
    startDate?: string;
    endDate?: string;
    store?: string;
    deliveryNumber?: string;
}