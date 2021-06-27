import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

import InputWidget from "../../../../../react-forms/form-widgets/input.widget";
import SelectWidget from "../../../../../react-forms/form-widgets/select.widget";
import NumberInputWidget from "../../../../../react-forms/form-widgets/number-input.widget";

export const schema: JSONSchema7 = {
    title: "Create Delivery",
    type: "object",
    properties: {
        store: {
            type: "string",
            enum: ["ICM", "BQ", "ALTURAS"],
        },
        deliveryNumber: {
            type: "string",
        },
        orders: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    size: {
                        type: "string",
                        enum: ["small", "big", "special"]
                    },
                    quantity: {
                        type: "number",
                    }
                },
                required: ["size"],
            }
        }
    },
    required: ["store", "deliveryNumber"]
}

export const uischema: UiSchema = {
    store: {
        "ui:widget": SelectWidget,
        "ui:placeholder": "enter store name here",
        "ui:options": {
            label: false,
            title: "Store Name:",
            colSpan: 6,
            rowSpan: 1,
        }
    },
    deliveryNumber: {
        "ui:widget": InputWidget,
        "ui:placeholder": "enter delivery number here",
        "ui:options": {
            label: false,
            title: "Delivery Number:",
            colSpan: 6,
            rowSpan: 1,
        }
    },
    orders: {
        "ui:options": {
            colSpan: 12,
            rowSpan: 1,
            title: "Orders:",
            ariaLabel: "create-delivery-add-order"
        },
        items: {
            size: {
                "ui:widget": SelectWidget,
                "ui:placeholder": "Select size",
                "ui:options": {
                    label: false,
                    title: "Size:",
                    colSpan: 6,
                    rowSpan: 1,
                },
            },
            quantity: {
                "ui:widget": NumberInputWidget,
                "ui:options": {
                    label: false,
                    title: "Quantity:",
                    colSpan: 6,
                    rowSpan: 1,
                },
            }
        },
    }
}