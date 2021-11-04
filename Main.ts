import CsvDataSource from "./src/datasource/CsvDataSource";
import OrdersService from "./src/service/OrdersService";

let os: OrdersService = new OrdersService(new CsvDataSource('./assets/input/order_lines.csv'));

os.PullData()
    .then(value => { console.log(value) })
    .catch(error => { console.log(error) })