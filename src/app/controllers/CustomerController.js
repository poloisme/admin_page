
class CustomerController {
    //[GET] home
    index(req, res) {
        res.render('customers/index');     
    }
}

module.exports = new CustomerController;