import { renderThroughRouter, fireEvent, act, screen, cleanup } from "../../test-utils"
import MockServer from '../../../mock-server';

describe("View: List-Deliveries", () => {
    describe("Filter form", () => {
        let server: any;

        beforeEach(() => {
            server = MockServer('test');
            server.createList("delivery", 2)
        })
    
        afterEach(() => {
            server.shutdown();
        })

        describe("click Filter button", () => {
            it("should show filter form for filtering list of deliveries", async () => {
                // ARRANGE
                await act(async () => {
                    await renderThroughRouter('/Delivery');
                })

                const { findByText, findByPlaceholderText } = screen;
    
                // ACT
                await act(async () => {
                    fireEvent.click(await findByText("Filter"));
                });
                
                // ASSERTIONS
                await findByText("Filter Deliveries");
                await findByText("Start Date:");
                await findByText("End Date:");
                await findByPlaceholderText("Enter Store");
            });
        });

        describe("check `Apply Delivery number`", () => {
            it("should show input element with placeholder delivery number", async () => {
                // ARRANGE
                await act(async () => {
                    await renderThroughRouter('/Delivery');
                })

                const { findByText, findByPlaceholderText } = screen;

                // ACT
                await act(async () => {
                    fireEvent.click(await findByText("Filter"));
                    fireEvent.click(await findByText("Apply delivery number"));
                });

                // ASSERTIONS
                await findByPlaceholderText("Delivery Number");
            });
        });
    });

    describe("Table for delivery items", () => {
        let server: any;

        beforeEach(() => {
            server = MockServer('test');
        });

        afterEach(() => {
            server.shutdown();
            cleanup();
        });

        describe("No Filters using initial page load", () => {
            it("should display table headers and 2 records of deliveries", async () => {
                // ARRANGE
                await server.createList("delivery", 2)
                const { getByText, findAllByText} = screen;

                // ACT
                await act(async () => {
                    await renderThroughRouter('/Delivery');
                });
    
                // ASSERTIONS
                getByText("POSTING DATE");
                getByText("STORE");
                getByText("DR NUMBER");
                getByText("AMOUNT");
                getByText("PAYMENT STATUS");
    
                expect(await findAllByText("view more")).toHaveLength(2);
            });
        });

        describe('Adding Filters by date', () => {
            const deliveryDetails = { 
                store: "ICM",
                amount: 100,
            };
            it("should show 1 record", async () => {
                // ARRANGE
                server.create("delivery", { ...deliveryDetails, deliveryNumber: '12', postingDate: '2021-06-02' });
                server.create("delivery", { ...deliveryDetails, deliveryNumber: '13', postingDate: '2021-06-04' });
                await act(async () => {
                    await renderThroughRouter('/Delivery');
                })

                // sub assertions
                const {findAllByText, findByText, findByLabelText} = screen;
                expect(await findAllByText("view more")).toHaveLength(2);

                // ACT
                await act(async () => {
                    fireEvent.click(await findByText("Filter"));
                    fireEvent.change(await findByLabelText("Start Date:"), { target: { value: "2021-06-01" } });
                    fireEvent.change(await findByLabelText("End Date:"), { target: { value: "2021-06-02" } });
                    fireEvent.click(await findByText("Search"));
                });

                // ASSERTIONS
                expect(await findAllByText("view more")).toHaveLength(1);
            });
        });
    });
});
