$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newReservation = {
        name : $("#name").val().trim(),
        phoneNumber : $("#phoneNumber").val().trim(),
        email : $("#email").val().trim(),
        uniqueId : $("#uniqueId").val().trim()
    };
    $.post("/api/reservation", newReservation)
    .then(function(data) {
        console.log("reservation.html", data);
        alert("Adding reservation...");
    });
});