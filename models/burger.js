const orm = require("../config/orm");

let burger = {

    getAll: function(callback) {
        orm.selectAll(function(res){
            callback(res);
        });
    }    

}

module.exports = burger;