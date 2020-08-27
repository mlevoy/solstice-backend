const accountService = require('../services/account.service');
module.exports = function(app) {
    app.get('/api/accounts', (req,res) => {
        res.json(accountService.findAllAccounts())
    });

    app.get('/api/accounts/:aid', (req,res) => {
        let id = parseInt(req.params['aid']);
        res.json(accountService.findAccountById(id))
    });

    app.get('/api/customers/:cid/accounts', (req,res) => {
        let id = parseInt(req.params['cid']);
        res.json(accountService.findAccountsForCustomer(id))
    })

};
