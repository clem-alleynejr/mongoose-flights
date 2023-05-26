const Flight = require('../models/flight');

module.exports = {
    create
};

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body);
    try {
        await flight.save();
    } catch (err) {
        res.render(`/flights/${flight._id}`, { errorMsg: err.message })
    }
    res.redirect(`/flights/${flight._id}`);
}