import { renderThroughRouter, fireEvent, screen, act } from "../../test-utils";
import MockServer from '../../../mock-server';

describe("View: Delivery Details", () => {
    let server: any;

    describe("In delivery page", () => {
        describe("click `view more` button of a row in the table for deliveries", () => {
            
            const deliveryDetails = { 
                store: "ICM", 
                postingDate: '2021-06-19',
                deliveryNumber: '1234',
                deliveryNumberOrders: [],
                amount: 100,
            };

            beforeEach(() => {
                server = MockServer('test');
            })
        
            afterEach(() => {
                server.shutdown();
            })

            describe("Redirects to Delivery Details page", () => {
                it("should show delivery details", async () => {
                    // ARRANGE
                    server.create("delivery", { ...deliveryDetails, deliveryNumberOrders: [{
                        size: 'big',
                        quantity: 1,
                        price: 100
                    }]});
                    await act(async () => {
                        await renderThroughRouter('/Delivery');
                    })
                    
                    // sub assertions
                    const {findAllByText, findByText} = screen;
                    const allViewButton = await findAllByText("view more");
                    expect(allViewButton.length).toBe(1);
    
                    // ACT
                    await act(async () => {
                        fireEvent.click(allViewButton[0]);
                    });
                    
                    // sub assertions
                    await findByText("Loading Delivery Details ...");
    
                    // FINAL ASSERTIONS
                    await findByText("Delivery Details");
                    await findByText(`Store: ${deliveryDetails.store}`);
                    await findByText(`Delivery Number: ${deliveryDetails.deliveryNumber}`);
                    await findByText(`Amount: ₱${deliveryDetails.amount}`);
                    await findByText("Return Slip");
                    // DR ORDERS
                    await findByText("DR ORDERS");
                    await findByText("QTY");
                    await findByText("1")
                    await findByText("SIZE");
                    await findByText("big");
                    await findByText("PRICE");
                    expect(await findAllByText("₱ 100")).toHaveLength(2);
                });
            })

            describe('click the menu icon then click "Update Delivery Details"', () => {
                it('should show the Update Delivery Details page', async () => {
                    // ARRANGE
                    server.create("delivery", deliveryDetails);
                    await act(async () => {
                        await renderThroughRouter('/Delivery');
                    });

                    const {findAllByText, findByText, findByRole, findByLabelText} = screen;
                    const allViewButton = await findAllByText("view more");
                    
                    // render delivery details page of delivery
                    await act(async () => {
                        fireEvent.click(allViewButton[0]);
                    });
                    
                    // sub assertions
                    await findByText("Loading Delivery Details ...");
                    await findByText("Delivery Details");
                    await findByText("UNPAID");     // Payment Status

                    // ACT
                    await act(async () => {
                        fireEvent.click(await findByRole('button', { name: 'delivery-details-menu' }));
                        fireEvent.click(await findByText("Update Delivery Details"));
                        // entering inputs to update delivery details
                        fireEvent.change(await findByLabelText("Bad Order:"), { target: { value: 10 } });
                        fireEvent.change(await findByLabelText("WHT:"), { target: { value: 20 } });
                        fireEvent.change(await findByLabelText("Other Deductions:"), { target: { value: 30 } });
                        fireEvent.change(await findByLabelText("Amount Paid:"), { target: { value: 40 } });
                        fireEvent.click(await findByText("SUBMIT ORDER"));
                    });

                    // ASSERTIONS
                    await findByText("₱10");    // BO
                    await findByText("₱20");    // WHT
                    await findByText("₱30");    // Other Deductions
                    await findByText("₱ 40")    // Total Amount Due
                    await findByText("₱40");    // Amount Paid
                    await findByText("PAID");   // Payment Status
                });
            });

            describe('click the menu icon then click "Create Return Slip"', () => {
                it('should show the Create Return Slip page and create return slip', async () => {
                    // ARRANGE
                    server.create("delivery", deliveryDetails);
                    await act(async () => {
                        await renderThroughRouter('/Delivery');
                    });
    
                    const {findAllByText, findByText, findByRole, findByLabelText} = screen;
                    const allViewButton = await findAllByText("view more");
                    
                    // render delivery details page of delivery
                    await act(async () => {
                        fireEvent.click(allViewButton[0]);
                    });
                    
                    // sub assertions
                    await findByText("Loading Delivery Details ...");
                    await findByText("Delivery Details");

                    // ACT
                    await act(async () => {
                        fireEvent.click(await findByRole('button', { name: 'delivery-details-menu' }));
                        fireEvent.click(await findByText("Create Return Slip"));

                        // add an order in return slip
                        fireEvent.click(await findByRole('button', { name: 'create-return-slip-add-order' }));
                        fireEvent.change(await findByLabelText("Quantity:"), { target: { value: 6 } });
                        fireEvent.change(await findByLabelText("Size:"), { target: { value: "big" } });
                        fireEvent.change(await findByLabelText("Price:"), { target: { value: 100 } });
                        fireEvent.click(await findByText("SUBMIT"));
                    });

                    // ASSERTIONS (table in return slip from delivery details)
                    await findAllByText("QTY");
                    await findByText("6");    
                    await findByText("SIZE");
                    await findByText("big");
                    await findByText("PRICE");
                    expect((await findAllByText("₱ 100")).length).toBe(2);
                });
            });

            describe('click the menu icon then click "DELETE DELIVERY" then click yes', () => {
                it("should remove delivery", async () => {
                    // ARRANGE
                    server.createList("delivery", 2)
                    await act(async () => {
                        await renderThroughRouter('/Delivery');
                    })
     
                    // sub assertions
                    const {findAllByText, findByText, findByRole} = screen;
                    expect(await findAllByText("view more")).toHaveLength(2);
                    
                    // sub arrange
                    await act(async () => {
                        fireEvent.click((await findAllByText("view more"))[0]);
                    });
                    
                    // sub assertions
                    await findByText("Loading Delivery Details ...");
                    await findByText("Delivery Details");
     
                    // ACT
                    await act(async () => {
                        fireEvent.click(await findByRole('button', { name: 'delivery-details-menu' }));
                        fireEvent.click(await findByText("DELETE DELIVERY"));
                        fireEvent.click(await findByText("Yes"));
                    });
     
                     // ASSERTIONS
                     expect(await findAllByText("view more")).toHaveLength(1);
                });
            });
        });
    });
});
