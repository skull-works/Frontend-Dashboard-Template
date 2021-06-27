import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

import SelectWidget from "../../../../../react-forms/form-widgets/select.widget";
import NumberInputWidget from "../../../../../react-forms/form-widgets/number-input.widget";

export const schema: JSONSchema7 = {
    title: "Create Delivery",
    type: "object",
    properties: {
        orders: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    quantity: {
                        type: "number",
                    },
                    size: {
                        type: "string",
                        enum: ["small", "big", "special"]
                    },
                    price: {
                        type: "number",
                    }
                },
                required: ["size", "quantity"],
            }
        }
    }
}

export const uischema: UiSchema = {
    orders: {
        "ui:options": {
            colSpan: 12,
            rowSpan: 1,
            title: "Return Slip:",
            ariaLabel: "create-return-slip-add-order"
        },
        items: {
            quantity: {
                "ui:widget": NumberInputWidget,
                "ui:options": {
                    label: false,
                    title: "Quantity:",
                    colSpan: [4,4,4],
                    rowSpan: 1,
                },
            },
            size: {
                "ui:widget": SelectWidget,
                "ui:placeholder": "Select size",
                "ui:options": {
                    label: false,
                    title: "Size:",
                    colSpan: [4,4,4],
                    rowSpan: 1,
                },
            },
            price: {
                "ui:widget": NumberInputWidget,
                "ui:placeholder": "Select size",
                "ui:options": {
                    label: false,
                    title: "Price:",
                    colSpan: [4,4,4],
                    rowSpan: 1,
                },
            }
        },
    }
}