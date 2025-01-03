import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline/promises'; // Import readline module

import CustomerServiceFactory from "./factories/CustomerServiceFactory";
import { CustomerServiceType } from "./factories/CustomerServiceType";
import CustomerService from "./services/CustomerService";
import ICustomerService from "./services/ICustomerService";

class MainClass {
    static async main() {
        const rl = readline.createInterface({
            input,
            output
        });

        try {
            console.log('Welcome to Customer Service Application');

            const customerServiceType = await rl.question("Enter the type of customer service (Online/Gold/Silver/Bronze): ");
            const customerService: ICustomerService =
                await CustomerServiceFactory.getCustomerService(customerServiceType as CustomerServiceType);
            const customerId = parseInt(await rl.question("Enter the customer id: "));
            const customer = await customerService.getCustomerById(customerId);

            if (customer) {
                console.log(`Customer Details : ${customer}`);
            } else {
                console.log(`Customer with id ${customerId} not found`);
            }

            const customerName = await rl.question("Enter the customer name (Partial): ");
            const customers = await customerService.searchCustomers(customerName);

            if (customers) {
                console.log(`Customers found with name ${customerName} :`);

                customers.forEach(c => console.log(c));
            } else {
                console.log(`No customers found with name ${customerName}`);
            }
        } catch (error) {
            console.error(`Error Occurred, Details : \n\t${error}`);
        } finally {
            rl.close();
        }
    }
}

export {
    MainClass
};