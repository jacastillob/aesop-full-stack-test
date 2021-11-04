import express from 'express';
import CsvDataSource from "../datasource/CsvDataSource";
import OrdersService from "../service/OrdersService";
import IController from "../interface/IController";

export default class OrdersController implements IController {
  public path = '/orders';
  public router = express.Router();
  private os: OrdersService = new OrdersService(new CsvDataSource('./assets/input/order_lines.csv'));
 
  constructor() {
    this.intializeRoutes();
  }
  public intializeRoutes() {
    this.router.get(this.path, this.getAllOrders);
    //this.router.post(this.path, this.createAPost);
  }
 
  getAllOrders = (request: express.Request, response: express.Response) => {
      this.os.PullData()
            .then(value => { response.send(value); })
            .catch(error => { console.log(error) })
  }

}