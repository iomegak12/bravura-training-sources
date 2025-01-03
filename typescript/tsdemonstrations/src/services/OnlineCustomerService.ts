import Customer from "../models/Customer";
import ICustomerService from "./ICustomerService";

import fs from 'fs';
import { parse } from 'csv-parse';

const customerRecords: Customer[] = [];

const initialize = (fileName: string): Promise<boolean> => {
    let promise = new Promise<boolean>(
        (resolve, reject) => {
            try {
                fs.createReadStream(fileName)
                    .pipe(parse({ delimiter: ',' }))
                    .on('data', (row) => {
                        const customer = new Customer(
                            parseInt(row[0]), row[1], row[2]);

                        customerRecords.push(customer);
                    })
                    .on('end', () => {
                        console.log('CSV file successfully processed');

                        resolve(true);
                    });
            } catch (err) {
                reject(err);
            }
        }
    );

    return promise;
};

class OnlineCustomerService implements ICustomerService {
    searchCustomers(name: string): Promise<Customer[] | undefined> {
        return new Promise<Customer[] | undefined>((resolve, reject) => {
            let customers = customerRecords.filter(
                c => c.name.toLowerCase().includes(name.toLowerCase()));

            resolve(customers);
        });
    }

    getCustomers(): Promise<Customer[]> {
        return new Promise<Customer[]>((resolve, reject) => {
            resolve(customerRecords);
        });
    }

    getCustomerById(id: number): Promise<Customer | undefined> {
        return new Promise<Customer | undefined>((resolve, reject) => {
            let customer = customerRecords.find(c => c.id === id);

            resolve(customer);
        });
    }

}

export {
    OnlineCustomerService,
    initialize
}