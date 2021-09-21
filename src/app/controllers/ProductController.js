const Product = require('../models/Product');
const {mongooseToObject} = require('../../util/mongoose');
const {multipleMongooseToObject} = require('../../util/mongoose');

class ProductController {
    //[GET] products/index
    index(req, res, next) {
        Product.find()
            .then(products => {
                res.render('products/index', {
                    products: multipleMongooseToObject(products)
                })
            })
    }

    //[DELETE] products/:id
    delete(req, res, next) {
        Product.delete({_id: req.params.id})
            .then(() => res.redirect('/products'))
            .catch(next);
    }

    //[GET] products/create
    create(req, res, next) {
        res.render('products/create');
    }

    //[POST] products/store
    store(req, res, next) {
        const product = new Product(req.body);
        product.save()
            .then(() => res.redirect('/products'))
            .catch(next);
    }

    //[GET] products/trash
    trash(req, res, next) {
        Product.findDeleted()
            .then(products => res.render('products/trash', {
                products: multipleMongooseToObject(products)
            }))
            .catch(next);
    }

    //[DELETE] products/trash/:id/force
    deleteForce(req, res, next) {
        Product.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/products/trash'))
            .catch(next);
    }

    //[PATCH] products/trash/:id/restore
    restore(req, res, next) {
        Product.restore({_id: req.params.id})
            .then(() => res.redirect('/products/trash'))
            .catch(next);
    }

    //[GET] products/:id/edit
    edit(req, res, next) {
        Product.findById(req.params.id)
            .then((product) => { res.render('products/edit', { 
                product: mongooseToObject(product)})
            })
            .catch(next);
    }

    //[PUT] products/:id
    update(req, res, next) {
        Product.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/products'))
            .catch(next);
    }
}

module.exports = new ProductController;