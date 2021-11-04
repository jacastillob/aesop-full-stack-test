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
                // pipe the parsed input into a csv formatter
                .pipe(
                    csv.format<Order, Order>({ headers: true }),
                )
                .on('error', error => reject(error))
                // Using the transform function from the formatting stream
                .transform((row, next): void => {

                    Records.push(row);
                    next(null, {
                        CARRIERSERVICE: row.CARRIERSERVICE,
                        ORDERCLIENTREF: row.ORDERCLIENTREF,
                        ADDRESSNAME: row.ADDRESSNAME,
                        SKUBARCODE: row.SKUBARCODE,
                        SKUQUANTITY: row.SKUQUANTITY
                    });


                })
                //.pipe(process.stdout)
                .on('end', () => {
                    resolve(Records);
                    process.exit()

                });
        });

    }
}