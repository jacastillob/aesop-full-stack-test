import IDataSource from "../interface/IDataSource";
import Order from "../model/Order";

export default class OrdersService {

  constructor(private DataSource: IDataSource) {
  }

  async PullingData(): Promise<Array<Order>> {

    return new Promise((resolve, reject) => {
      this.DataSource.PullData()
        .then(value => {

          let SourceData: Array<Order> = value;
          console.log(SourceData)
          resolve(SourceData)

        })
        .catch(err => { reject(err) });
    });


  }


}