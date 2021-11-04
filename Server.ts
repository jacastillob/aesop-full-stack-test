
import App from './App';
import OrdersController from "./src/controllers/OrdersController";
 
const app = new App(
  [
    new OrdersController()
  ],
  5000,
);
app.listen();