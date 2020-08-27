const customerService = require('../services/customer.service');
module.exports = function(app) {
    app.get('/api/customers-basic', (req,res) => {
        res.json(customerService.findAllCustomersBasicInfo())
    });
    app.get('/api/customers', (req,res) =>
        res.json(customerService.findAllCustomers()));
            // .then(AllCustomers => res.json(allCustomers)))

    app.get('/api/customers/:cid', (req,res) => {
        let id = parseInt(req.params['cid']);
        res.json(customerService.findCustomerById(id))
    })

};
