const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test', {useNewUrlParser: true}, 
(err) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
    }
});
module.exports = mongoose;