import IDataSource from "../interface/IDataSource"
import Order from "../model/Order";


export default class JsonDataSource implements IDataSource {

  constructor(private Source: string) {

  }

  async PullData(): Promise<Array<Order>> {
    throw new Error("Method not implemented.");

  }

  // async PullData(): Promise<Array<RawOrder>> {

  //   return new Promise((resolve, reject) => {

  //     fs.readFile(this.Source, 'utf8', function (err, data) {
  //       if (err) {
  //         reject(err);
  //       }
  //       let Records = new Array<RawOrder>();
  //       //Object.assign(Records, data);
  //       Records = JSON.parse(data);

  //       resolve(Records);
  //     });
  //   });
  // }


}



