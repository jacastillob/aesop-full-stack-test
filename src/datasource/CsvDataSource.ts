import IDataSource from "../interface/IDataSource";
import Order from "../model/Order";
import fs from "fs";
import * as path from 'path';
import * as csv from 'fast-csv';
// In case there could be another datasource,using the dependency inversion principle it is possible to achieve it

export default class CsvDataSource implements IDataSource {

    constructor(private Source: string) {

    }
    async PullData(): Promise<Array<Order>> {

        return new Promise((resolve, reject) => {

            fs.createReadStream(this.Source)
                .pipe(csv.parse({ headers: true }))
                // pipe the parsed input into a csv formatter
                .pipe(
                    csv.format<Order, Order>({ headers: true }),
                )
                // Using the transform function from the formatting stream
                .transform((row, next): void => {
                    console.log(row)
                    let Records = new Array<Order>();
                    if (Records == undefined) reject('Error')
                    // return next(null, {
                    //     CARRIERSERVICE: row.CARRIERSERVICE,
                    //     ORDERCLIENTREF: row.ORDERCLIENTREF,
                    //     ADDRESSNAME: row.ADDRESSNAME,
                    //     SKUBARCODE: row.SKUBARCODE,
                    //     SKUQUANTITY:row.SKUQUANTITY
                    // });
                    resolve(Records);

                    // if (err) {
                    //     return next(err);
                    // }
                    // if (!user) {
                    //     return next(new Error(`Unable to find user for ${row.id}`);
                    // }
                    // return next(null, {
                    //     id: user.id,
                    //     firstName: row.first_name,
                    //     lastName: row.last_name,
                    //     address: row.address,
                    //     // properties from user
                    //     isVerified: user.isVerified,
                    //     hasLoggedIn: user.hasLoggedIn,
                    //     age: user.age,
                    // });

                })
                .pipe(process.stdout)
                .on('end', () => process.exit());


        });

    }
}