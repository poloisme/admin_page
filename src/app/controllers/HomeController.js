
class HomeController {
    //[GET] home
    index(req, res) {
        res.render('index');     
    }
}

module.exports = new HomeController;