import JsonDataSource from "./src/datasource/JsonDataSource";
import OrdersService from "./src/service/OrdersService";

let os: OrdersService = new OrdersService(new JsonDataSource('./assets/input/order_lines.json',));

os.PullingData()
    .then(value => { console.log(value) })
    .catch(error => { })




