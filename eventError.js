const {logTrying} = require('./logs');


const errorHander = function (err,req,res,next) {
    logTrying(`${err.name}\t ${err.message}`, 'errorLog.txt');
    res.status(500).send(err.message);
}

module.exports = errorHander;