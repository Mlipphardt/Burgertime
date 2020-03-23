$(function() {
    
    $("#create-burger-button").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
        name: $("#burger").val().trim(),
        devoured: false
        };

        console.log(newBurger);

        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("Order up!");
        }
        );
    });
    

    $("#linktest").on("click", function(event){
        event.preventDefault();
        console.log("JS file has loaded properly.")
    });

});