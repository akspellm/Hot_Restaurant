
    $("#submitButton";).on("click", function(event) {
      event.preventDefault();
      var newReservation = {
        name: $("#user-name-input").val().trim(),
        phone: $("phone-number-input").val().trim(),
        email: $("email-input").val().trim(),
      };

      $.post("/api/", newReservation)
      .done(function(data) {
        console.log(data);
      );
      });
    });

