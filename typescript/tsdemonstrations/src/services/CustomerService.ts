import Customer from "../models/Customer";
import ICustomerService from "./ICustomerService";

const DEFAULT_TIMEOUT: number = 1000;
const customers: Customer[] = [
    new Customer(1, "John Doe", 30),
    new Customer(2, "Jon Snow", 25),
    new Customer(3, "Bill Gates", 65),
    new Customer(4, "Steve Jobs", 60)
];

class CustomerService implements ICustomerService {
    searchCustomers(name: string): Promise<Customer[] | undefined> {
        let promise = new Promise<Customer[] | undefined>(
            (resolve, reject) => {
                let filteredCustomers = customers.filter(
                    c => c.name.toLowerCase().includes(name.toLowerCase()));

                resolve(filteredCustomers);
            });

        return promise;
    }

    getCustomers(): Promise<Customer[]> {
        let promise = new Promise<Customer[]>(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(customers);
                }, DEFAULT_TIMEOUT);
            });

        return promise;
    }

    getCustomerById(id: number): Promise<Customer> {
        let promise = new Promise<Customer>(
            (resolve, reject) => {
                let customer = customers.find(c => c.id === id);
                if (customer) {
                    resolve(customer);
                } else {
                    reject(`Customer with id ${id} not found`);
                }
            });

        return promise;
    }
}

export default CustomerService;