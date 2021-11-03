import IDataSource from "../interface/IDataSource";
import Order from "../model/Order";

// In case there could be another datasource,using the dependency inversion principle it is possible to achieve it

export default class MySqlDataSource implements IDataSource {

    constructor(private Source: string) {

    }
    async PullData(): Promise<Array<Order>> {
        throw new Error("Method not implemented.");

    }
}