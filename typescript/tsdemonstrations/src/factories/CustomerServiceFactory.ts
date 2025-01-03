import CustomerService from "../services/CustomerService";
import ICustomerService from "../services/ICustomerService";
import { initialize, OnlineCustomerService } from "../services/OnlineCustomerService";
import { CustomerServiceType } from "./CustomerServiceType";

const DATA_FILE = process.env.DATA_FILE || './data/customers.csv';

export default class CustomerServiceFactory {
    static async getCustomerService(customerServiceType: CustomerServiceType): Promise<ICustomerService> {
        switch (customerServiceType) {
            case CustomerServiceType.Gold:
            case CustomerServiceType.Silver:
            case CustomerServiceType.Bronze:
                return new CustomerService();
            case CustomerServiceType.Online:
                await initialize(DATA_FILE);

                return new OnlineCustomerService();
            default:
                throw new Error("Invalid Customer Service Type");
        }
    }
}