const homeRouter = require('./home');
const productRouter = require('./product');
const customerRouter = require('./customer');
const orderRouter = require('./order');
const chatRouter = require('./chat');

function route(app) {
    app.use('/', homeRouter);
    app.use('/products', productRouter);
    app.use('/customers', customerRouter);
    app.use('/orders', orderRouter);
    app.use('/chats', chatRouter);
}

module.exports = route;