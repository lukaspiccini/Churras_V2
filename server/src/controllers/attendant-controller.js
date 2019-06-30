const Barbecue = require("../models/barbecue");
const Attendant = require("../models/attendant");

exports.getAllAttendants = async (req, res, next) => {
    try {
        let result = await Attendant.find();
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.getAttendantById = async (req, res, next) => {
    const _id = req.params.id;

    try {
        let result = await Attendant.findById(_id);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.createAttendant = async (req, res, next) => {
    const attendant = new Attendant({
        name: req.body.name,
        value: req.body.value,
        paid: req.body.paid,
        with_drinks: req.body.with_drinks
    });

    try {
        const new_attendant = await attendant.save(attendant);
        const barbecue = await Barbecue.findById({ _id: req.body._barbecueId }).exec();
        
        barbecue.attendants.push(new_attendant);
        const result = await barbecue.save();
        
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.updateAttendant = async (req, res, next) => {
    const _id = req.params.id;
    const attendant = new Attendant(req.body);
    
    try {
        await Attendant.findByIdAndUpdate(_id, attendant).exec();
        res.status(204).send();
    } catch (err) {
        console.log(err)    
        res.status(500).send(err);
    }
}

exports.deleteAttendant = async (req, res, next) => {
    const _id = req.params.id;

    try {
        let result = await Barbecue.findOne({attendants: _id}).populate('attendants').exec();
        result.attendants.pull({_id: _id});
        result.save();

        await Attendant.findByIdAndDelete(_id);
        console.log(result);

        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
}