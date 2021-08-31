
class OrdertController {
    //[GET] home
    index(req, res) {
        res.render('orders/index');     
    }
}

module.exports = new OrdertController;