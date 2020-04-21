$(function () {
  //When clicked, insert a new burger into the MySQL burgers table.
  $("#create-burger-button").on("click", function (event) {
    event.preventDefault();
    if ($("#burger").val().trim() === "") {
      console.log("Error - no name provided.");
    } else {
      var newBurger = {
        name: $("#burger").val().trim(),
        devoured: false,
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        location.reload();
      });
    }
  });

  //When clicked, update the corresponding entry in the burgers table
  //to indicate the burger has been eaten.
  $(".eat-burger").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr("data-id");

    let burgerEaten = {
      devoured: 1,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burgerEaten,
    }).then(function () {
      location.reload();
    });
  });

  //When clicked, return an eaten burger to the 'ready' column.
  $(".renew-burger").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr("data-id");

    let burgerRenewed = {
      devoured: 0,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burgerRenewed,
    }).then(function () {
      location.reload();
    });
  });

  $(".delete-burger-btn").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr("data-id");

    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id,
    }).then(function () {
      location.reload();
    });
  });
});
