const productModel = require("../model/ProductsModel");


// create data
exports.CreateProduct = (req, res) => {
    const reqBody = req.body;
    productModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'Failed to create', data: err })
        }
        else {
            res.status(200).json({ status: 'successfully created', data: data })
        }
    })
};

// read data
exports.ReadProduct = (req, res) => {
    const query = {};
    const projection = "productName productPrice quantity unitPrice totalPrice img";
    productModel.find(query, projection, (err, data) => {
        if (err) {
            res.status(400).json({ status: "failed to read ", data: err })
        }
        else {
            res.status(200).json({ status: 'Successfully read data', data: data })
        }
    })
};
// read data by id
exports.ReadProductByID = (req, res) => {
    const id = req.params.id;
    const query = { _id: id };
    const projection = "productName productPrice quantity unitPrice totalPrice img";
    productModel.find(query, projection, (err, data) => {
        if (err) {
            res.status(400).json({ status: "failed to read ", data: err })
        }
        else {
            res.status(200).json({ status: 'Successfully read data', data: data })
        }
    })
};


// update data
exports.UpdateProduct = (req, res) => {
    const id = req.params.id;
    const query = { _id: id };
    const reqBody = req.body;

    productModel.updateOne(query, reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: "failed to update ", data: err })
        }
        else {
            res.status(200).json({ status: 'Successfully updated data', data: data })
        }
    })
};


// delete data
exports.DeleteProduct = (req, res) => {
    const id = req.params.id;
    const query = { _id: id };
    productModel.remove(query, (err, data) => {
        if (err) {
            res.status(400).json({ status: "failed to delete", data: err })
        }
        else {
            res.status(200).json({ status: 'Successfully deleted data', data: data })
        }
    })
}