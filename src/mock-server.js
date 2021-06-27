import { createServer, Model, Factory } from "miragejs"
import dayjs from 'dayjs';

export default function startMirage(environment = 'development') {
  return createServer({
    environment,
    models: {
      delivery: Model,
    },

    factories: {
      delivery: Factory.extend({
        store() {
          const stores = ['ICM','BQ', 'ALTURAS'];
          return stores[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
        },
        postingDate(i) {
          const year = 2021;
          const month = Math.floor(Math.random() * (6 - 6 + 1)) + 6;
          const date = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
          const newDate = dayjs(`${year}-${month}-${date}`).format("YYYY-MM-DD");
          return newDate;
        },
        deliveryNumber() {
          return (Math.floor(Math.random() * (10000 - 1950 + 1)) + 1950).toString();
        },
        deliveryNumberOrders() {
          const orders = [];
          const sizes = ['small', 'big', 'special'];
          const amounts = [50, 100, 150];
          const quantities = [1,2,3,4];
          const totalOrders = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

          for (let i = 0 ; i < totalOrders ; i++) {
            const sizeOrder = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
            const quantity = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
            const totalAmount = quantities[quantity] * amounts[sizeOrder];
            orders.push({
              size: sizes[sizeOrder],
              quantity: quantities[quantity],
              price: totalAmount
            });
          }

          return orders;
        },
        amount() {
          let totalAmount = 0;
          this.deliveryNumberOrders.forEach((order) => {
            totalAmount += order.price;
          })
          return totalAmount;
        }
      })
    },
  
    routes() {
      this.namespace = "api"
  
      this.get("/deliveries", (schema, request) => {
        const { startDate: start, endDate: end, store, deliveryNumber } = request.queryParams;

        const startDate = start || '2021-06-01';
        const endDate = end || '2021-06-30';

        const deliveries = [];
        const results = schema.deliveries.all();

        for (const delivery of results.models) {
          if (deliveryNumber) {
            if(deliveryNumber === delivery.attrs.deliveryNumber) 
              deliveries.push(delivery.attrs);
            continue;
          }

          const postingDate = delivery.attrs.postingDate;
          if (postingDate >= startDate && postingDate <= endDate){
            if (store) {
              if (store === delivery.attrs.store) deliveries.push(delivery.attrs);
            } else
              deliveries.push(delivery.attrs);
          }
        }

        return JSON.stringify({ deliveries });
      });

      this.post("/deliveries", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        attrs.postingDate = dayjs().format("YYYY-MM-DD");

        const amounts = [50, 100, 150];
        const sizes = ['small', 'big', 'special'];
        attrs.deliveryNumberOrders = attrs.deliveryNumberOrders.map((order) => {
          const sizeIndex = sizes.findIndex((element) => element === order.size);
          const price = amounts[sizeIndex] * order.quantity;
          attrs.amount += price;
          return { size: order.size, quantity: order.quantity, price };
        })

        return schema.deliveries.create({ ...attrs });
      });

      this.get("/deliveries/:id", (schema, request) => {
        let id = request.params.id;
      
        return schema.deliveries.find(id);
      });

      this.put("/deliveries/:id", (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody)
        return schema.deliveries.find(id).update(attrs);
      });

      this.post("deliveries/returnSlip/create/:id", (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody)

        const delivery = schema.deliveries.find(id).update({ returnSlip: attrs.orders });

        return delivery;
      });

      this.delete("deliveries/:id", (schema, request) => {
        let id = request.params.id

        const isDeleted = schema.deliveries.find(id).destroy();

        if (!isDeleted) 
          return { isDeleted: true }; 
        else 
          return { isDeleted: false };
      });
    },
  
    seeds(server) {
      server.createList("delivery", 4)
      server.db.dump()
    },
  })
}