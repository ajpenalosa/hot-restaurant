$.get("/api/tables", function(data) {
    if (data) {
        for ( var i = 0; i < data.length; i++ ) {
            var card = $("<div class='card'>");
            var cardBody = $("<div class='card-body'>");

            var heading = $("<h2>");
            heading.text(" " + data[i].uniqueID);

            var badge = $("<span class='badge badge-primary'>");
            badge.text(i + 1);

            $(".current-reservations").append(card);
            card.append(cardBody);
            cardBody.append(heading);
            heading.prepend(badge);
        }
    }
    else {
        $(".current-reservations").html("<h3>There are currently no reservations.</h3>");
    }
});

$.get("/api/waitlist", function(data) {
    if (data) {
        for ( var i = 0; i < data.length; i++ ) {
            var card = $("<div class='card'>");
            var cardBody = $("<div class='card-body'>");

            var heading = $("<h2>");
            heading.text(" " + data[i].uniqueID);

            var badge = $("<span class='badge badge-primary'>");
            badge.text(i + 1);

            $(".waiting-list").append(card);
            card.append(cardBody);
            cardBody.append(heading);
            heading.prepend(badge);
        }
    }
    else {
        $(".waiting-list").html("<h3>There are currently no reservations.</h3>");
    }
});

$("#btn-add").on("click",function(event){
    event.preventDefault();
    var add = {
    name: $("#name").val(),
    phone: $("#phone").val(),
    email: $("#e-mail").val(),
    uniqueID: $("#unique-id").val()
    };
    console.log(add);
$.post("/api/tables", add).then(function(data){
    console.log(data);
    if (data.length < 5){
    alert("added to reservation list")
    }
    else {
    alert("reservation are full")
    }
    }); 
});