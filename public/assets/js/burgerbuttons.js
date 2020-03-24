$(function() {
    
    $("#create-burger-button").on("click", function(event) {
        event.preventDefault();
        if ($("#burger").val().trim() === ""){
            console.log("Error - no name provided.")
        } else{ 

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
                location.reload();
            }
            );
        }
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
                location.reload();
            }
        );
    });

    $(".renew-burger").on("click", function(event){
        event.preventDefault();
        let id = $(this).attr("data-id");
        console.log(id)

        let burgerRenewed = {
            devoured: 0
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerRenewed
        }).then(
            function() {
                location.reload();
            }
        );
    });
    
    

});