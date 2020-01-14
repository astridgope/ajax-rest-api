$(document).ready(function() {
    $("#jokeBtn").click(function() {
        $.get("http://api.icndb.com/jokes/random", function(data) {
            $("#joke").html(data.value.joke);
        });
    });
});