import { renderThroughRouter, fireEvent, screen } from "../../test-utils"
import MockServer from '../../../mock-server';

describe("View: Create-Delivery", () => {
    describe("Form Title", () => {
        it("title should be `Create Delivery`", () => {
            renderThroughRouter("/Delivery/create");
            screen.getByText("Create Delivery");
        });
    })

    describe("click add order button", () => {
        it("should show `Size:` and `Quantity:` label inputs", () => {
            renderThroughRouter("/Delivery/create");
            const { getByText, getByRole } = screen;
            
            fireEvent.click(getByRole('button', { name: "create-delivery-add-order" }));
            getByText("Size:");
            getByText("Quantity:");
        })
    })

    describe("click CREATE button", () => {
        let server: any;

        beforeEach(() => {
            server = MockServer('test');
        })

        afterEach(() => {
            server.shutdown();
        })

        it("should show a success toast message", async () => {
            // ARRANGE
            await renderThroughRouter("/Delivery/create");
            const { getByText, getByLabelText, getByRole, findByText } = screen;
            
            // ACT
            fireEvent.click(getByRole('button', { name: "create-delivery-add-order" }));
            getByText("Size:");
            getByText("Quantity:");

            fireEvent.change(getByLabelText("Delivery Number:"), { target: { value: '123456' } });
            fireEvent.change(getByLabelText("Store Name:"), { target: { value: "ICM" } });
            
            fireEvent.change(getByLabelText("Size:"), { target: { value: "small" } });
            fireEvent.change(getByLabelText("Quantity:"), { target: { value: "2" } });

            fireEvent.click(getByText("SUBMIT ORDER"));

            // ASSERTIONS
            await findByText("Creating Delivery");
            await findByText("Successfuly created delivery");
        })
    })
})
