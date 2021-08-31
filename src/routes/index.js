const homeRouter = require('./home');
const productRouter = require('./product');
const customerRouter = require('./customer');
const orderRouter = require('./order');
const chatRouter = require('./chat');

function route(app) {
    app.use('/', homeRouter);
    app.use('/product', productRouter);
    app.use('/customer', customerRouter);
    app.use('/order', orderRouter);
    app.use('/chat', chatRouter);
}

module.exports = route;