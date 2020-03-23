const connection = require("./connection");

const orm = {

    selectAll: function(callback){
        let query = "SELECT * FROM burgers";
        connection.query(query, function(err, res){
            if (err) throw err;
            callback(res);
        })
    },

    insertOne: function(burger_name){
        let query = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
        connection.query(query, burger_name, function(err, res){
            if (err) throw err;
            console.log(res);
        })        
        console.log("inserting a burger!");
    },

    updateOne: function(burger_name, boolean){
        let query = "UPDATE burgers SET ? WHERE ?";
        let update = [{devoured: boolean}, {burger_name: burger_name}]
        connection.query(query, update, function(err, res){
                if (err) throw err;
                console.log(res);
            })
        console.log("Updating burger status!");
    }

}

module.exports = orm;