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
            location.reload();
        }
        );
    });

    $(".eat-burger").on("click", function(event){
        event.preventDefault();
        let id = $(this).attr("data-id");
        console.log(id)

        let burgerEaten = {
            devoured: 1
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerEaten
        }).then(
            function() {
                console.log("Burger eaten!")
                location.reload();
            }
        );
    });
    

});