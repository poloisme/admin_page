const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: {type: String, required: true},
    price: {type: Schema.Types.Decimal128, required: true},
    type: {type: String},
    image: {type: String}
}, {
    timestamps: true,
});

Product.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt : true });

module.exports = mongoose.model('Products', Product); //pramater 1 phai trung voi collection trong mongodb