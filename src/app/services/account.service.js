const accountDao = require('../daos/account.dao');

const findAllAccounts = () => accountDao.findAllAccounts();
const findAccountById = (aid) => accountDao.findAccountById(aid);
const findAccountsForCustomer = (cid) => accountDao.findAccountsForCustomer(cid)


module.exports = {findAllAccounts, findAccountsForCustomer, findAccountById};
