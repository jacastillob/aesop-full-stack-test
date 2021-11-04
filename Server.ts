import JsonDataSource from "./src/datasource/JsonDataSource";
import OrdersService from "./src/service/OrdersService";
import express from 'express';

const app = express();
const os: OrdersService = new OrdersService(new JsonDataSource('./assets/input/order_lines.csv'));

app.get('/', (req, res) => {
    res.send('Webserver!');
})
app.get('/order', (req, res) => {
    os.PullData()
        .then(value => { res.send(value); })
        .catch(error => { res.send(error); })
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})






