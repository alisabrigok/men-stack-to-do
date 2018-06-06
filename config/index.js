var configValues = require('./config');

module.exports = {

    getDbConnectionString: function(){

        return 'mongodb://' + configValues.user + ':' + configValues.pass + 'name_of_the_database';

    }
}