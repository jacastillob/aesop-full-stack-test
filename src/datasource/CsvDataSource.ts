import IDataSource from "../interface/IDataSource";
import Order from "../model/Order";
import fs from "fs";
import * as csv from 'fast-csv';

// In case there could be another datasource,using the dependency inversion principle it is possible to achieve it

export default class CsvDataSource implements IDataSource {

    constructor(private Source: string) {
    }
    async PullData(): Promise<Array<Order>> {

        return new Promise((resolve, reject) => {
            let Records = new Array<Order>();

            fs.createReadStream(this.Source)
                    .pipe(csv.parse({ headers: true }))
                    .on('error', error => reject(error))
                    .on('data', row =>  Records.push(row))
                    .on('end', () => resolve(Records));

         });
        
    }
}