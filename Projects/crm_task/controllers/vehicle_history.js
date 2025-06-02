const vehicle_history = require('../models/vehicle_history');

module.exports.vehicle_data = async(req, res) =>{
    try{
        const history = await vehicle_history.findAll();

        if(history.length === 0){
            return res.status(404).json("No data found");
        }
        return res.json(history)
    }
    catch(err){
        console.error("vehicle fetching error:"+ err);
        return res.status(500).send('server error');
    }
};