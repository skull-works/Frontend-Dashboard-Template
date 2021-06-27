import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

import InputWidget from "../../../../../react-forms/form-widgets/input.widget";
import SelectWidget from "../../../../../react-forms/form-widgets/select.widget";
import NumberInputWidget from "../../../../../react-forms/form-widgets/number-input.widget";
import { IDelivery } from "../../../types/delivery.types";

export const generateSchema = (defaultValues: IDelivery): JSONSchema7 => {
    const schema: JSONSchema7 = {
        title: "Create Delivery",
        type: "object",
        properties: {
            store: {
                type: "string",
                enum: ["ICM", "BQ", "ALTURAS"],
                default: defaultValues.store
            },
            deliveryNumber: {
                type: "string",
                default: defaultValues.deliveryNumber
            },
            amount: {
                type: "number",
                default: defaultValues.amount
            },
            badOrder: {
                type: "number",
                default: defaultValues.badOrder
            },
            widthHoldingTax: {
                type: "number",
                default: defaultValues.widthHoldingTax
            },
            otherDeductions: {
                type: "number",
                default: defaultValues.otherDeductions
            },
            amountPaid: {
                type: "number",
                default: defaultValues.amountPaid
            },
            checkNumber: {
                type: "string",
                default: defaultValues.checkNumber
            },
            checkDate: {
                type: "string",
                default: defaultValues.checkDate
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

    return schema;
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
    amount: {
        "ui:widget": NumberInputWidget,
        "ui:options": {
            label: false,
            title: "Amount:",
            colSpan: 12,
            rowSpan: 1,
        },
    },
    badOrder: {
        "ui:widget": NumberInputWidget,
        "ui:options": {
            label: false,
            title: "Bad Order:",
            colSpan: [6,6,4],
            rowSpan: 1,
        },
    },
    widthHoldingTax: {
        "ui:widget": NumberInputWidget,
        "ui:options": {
            label: false,
            title: "WHT:",
            colSpan: [6,6,4],
            rowSpan: 1,
        },
    },
    otherDeductions: {
        "ui:widget": NumberInputWidget,
        "ui:options": {
            label: false,
            title: "Other Deductions:",
            colSpan: [6,6,4],
            rowSpan: 1,
        },
    },
    amountPaid: {
        "ui:widget": NumberInputWidget,
        "ui:options": {
            label: false,
            title: "Amount Paid:",
            colSpan: 6,
            rowSpan: 1,
        },
    },
    checkNumber: {
        "ui:widget": InputWidget,
        "ui:placeholder": "enter check number here",
        "ui:options": {
            label: false,
            title: "Check Number:",
            colSpan: 6,
            rowSpan: 1,
        }
    },
    checkDate: {
        "ui:widget": InputWidget,
        "ui:options": {
            label: false,
            title: "Check Date:",
            colSpan: 6,
            rowSpan: 1,
        },
    },
    orders: {
        "ui:options": {
            colSpan: 12,
            rowSpan: 1,
            title: "Orders:",
            ariaLabel: "update-delivery-add-order"
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