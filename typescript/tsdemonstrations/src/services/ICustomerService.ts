import Customer from "../models/Customer";

export default interface ICustomerService {
    getCustomers(): Promise<Customer[]>;
    getCustomerById(id: number): Promise<Customer | undefined>;
    searchCustomers(name: string): Promise<Customer[] | undefined>;
}