const customers = require('../services/customers');

const findAllCustomers = () => customers;

const findAllCustomersBasicInfo = () => customers.map((customer) =>
    (({ id, first_name, last_name, email }) =>
        ({ id, first_name, last_name, email }))(customer));

const findCustomerById = (id) => customers.filter((customer) => customer.id === id)[0];

module.exports = {findAllCustomers, findAllCustomersBasicInfo, findCustomerById};
