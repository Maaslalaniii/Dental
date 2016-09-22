$('#send-button').click(function () {
    $(this).addClass("clicked");
    $('#send-button p').text(function (i, text) {
        return "Sent!";
    });
});