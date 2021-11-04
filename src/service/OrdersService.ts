import IDataSource from "../interface/IDataSource";
import Order from "../model/Order";

export default class OrdersService {

  constructor(private DataSource: IDataSource) {
  }

  async PullData(): Promise<Array<Order>> {

    return new Promise((resolve, reject) => {
      this.DataSource.PullData()
        .then(value => {

          let SourceData: Array<Order> = value;

          resolve(SourceData)

        })
        .catch(err => { reject(err) });
    });
  }

  // async PullingData(): Promise<Order> {

  //   return new Promise((resolve, reject) => {
  //     this.DataSource.PullData()
  //       .then(value => {

  //         let SourceData: Array<RawOrder> = value;

  //         // Array Maping into New Array<Customer
  //         let Customers: Array<Customer> = SourceData.map(obj => { return obj.customer; });
  //         let Orders: Array<Order> = [];
  //         // Traversing the Source Data to Create new Array<Order>                               
  //         SourceData.forEach(item => {
  //           let OrderItems: Array<OrderItem> = [];
  //           Object.keys(item.order).forEach(key => {
  //             OrderItems.push({
  //               item: key,
  //               quantity: item.order[key].quantity,
  //               price: item.order[key].price,
  //               revenue: item.order[key].price * item.order[key].quantity
  //             });
  //           });

  //           Orders.push({
  //             id: item.id,
  //             date: item.date,
  //             customer: item.customer.id,
  //             order: OrderItems,
  //             vendor: item.vendor
  //           });


  //         });
  //         // Creating new Object
  //         let NewOrders: TransformedOrder = { customers: Customers, orders: Orders };

  //         resolve(NewOrders)

  //       })
  //       .catch(err => { reject(err) });
  //   });


  // }

  // async TransformData(): Promise<TransformedOrder> {

  //   return new Promise((resolve, reject) => {
  //     this.PullingData().then(value => {
  //       // Pushing Data Into New JSON File
  //       //  Variations to wrap out this Promise

  //       // 1. Pushing Data Via IDataSource and resolving the promise
  //       //this.DataSource.PushData(value ,this.Destination);

  //       //resolve(value);
  //       // 2. Pushing Data Via Another Promise and resolving the existing promise if no errors
  //       let PushingDataPromise = this.PushData(value);
  //       PushingDataPromise
  //         .then(value => { resolve(value) })
  //         .catch(err => { reject(err) });

  //     }).catch(err => { reject(err) });

  //   });

  // }

  // async PushData(Order: TransformedOrder): Promise<TransformedOrder> {

  //   return new Promise((resolve, reject) => {
  //     this.DataSource.PushData(Order)
  //       .then(value => {
  //         if (value)
  //           resolve(Order);
  //         else
  //           reject("Error:Problem pushing data into the DataSource ");
  //       })
  //       .catch(err => { reject(err) });
  //   });
  // }

}