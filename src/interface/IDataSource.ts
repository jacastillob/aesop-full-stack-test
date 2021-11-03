import Order from "../model/Order";

export default interface IDataSource {

    PullData: () => Promise<Array<Order>>

}
