import create, { GetState, SetState } from "zustand";
import { devtools, } from 'zustand/middleware'

import { IFilterOrders } from '../types/delivery.types';

export interface IListDeliveriesStore {
    filters: IFilterOrders;
    setFilters: (filters: IFilterOrders) => void;
    resetStates: () => void;
}

let listDeliveriesStore = (set: any, get: GetState<IListDeliveriesStore>) => {
    const setState: SetState<IListDeliveriesStore> = set;

    const initialStates = {
        filters: {}
    }

    const store: IListDeliveriesStore = {
        ...initialStates,

        setFilters: (filters: IFilterOrders) => {
            setState({ filters });
        },

        resetStates: () => {
            set({ ...initialStates })
        }
    }
    
    return store;
}

export default listDeliveriesStore = create<IListDeliveriesStore>(devtools(listDeliveriesStore));