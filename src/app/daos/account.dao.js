const accounts = require('../services/accounts');

const findAllAccounts = () => accounts;

const findAccountById = (aid) => accounts.filter((account) => account.id === aid);

const findAccountsForCustomer = (cid) => accounts.filter((account) =>  account.customer_id === cid);

module.exports = {findAllAccounts, findAccountById, findAccountsForCustomer};
