
class ChatController {
    //[GET] home
    index(req, res) {
        res.render('chats/index');     
    }
}

module.exports = new ChatController;