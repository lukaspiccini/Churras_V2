const Barbecue = require('../models/barbecue');

exports.getAllBarbecues = async (req, res, next) => {
    try {
        let result = await Barbecue.find().populate('attendants');
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.getBarbecueById = async (req, res, next) => {
    const _id = req.params.id;

    try {
        let result = await Barbecue.findById(_id);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.createBarbecue = async (req, res, next) => {
    const barbecue = new Barbecue(req.body);

    try {
        let result = await barbecue.save();
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.updateBarbecue = async (req, res, next) => {
    const _id = req.params.id;
    const barbecue = new Barbecue(req.body);
    
    try {
        let result = await Barbecue.findByIdAndUpdate(_id, barbecue);
        res.status(204).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.deleteBarbecue = async (req, res, next) => {
    const _id = req.params.id;

    try {
        let result = await Barbecue.findByIdAndDelete(_id);
        res.status(204).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}