const customerDao = require('../daos/customer.dao');

const findAllCustomers = () => customerDao.findAllCustomers();
const findAllCustomersBasicInfo= () => customerDao.findAllCustomersBasicInfo();
const findCustomerById = (id) => customerDao.findCustomerById(id);


module.exports = {findAllCustomers, findAllCustomersBasicInfo, findCustomerById};
