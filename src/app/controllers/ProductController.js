
class ProductController {
    //[GET] home
    index(req, res) {
        res.render('products/index');     
    }
}

module.exports = new ProductController;