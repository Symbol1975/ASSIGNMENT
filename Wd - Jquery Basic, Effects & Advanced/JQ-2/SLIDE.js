
//Slide Down, Slide Up, Slide Toggle EFFECT JS

$(document).ready(function () {

    $("#slideup").click(function () {
        $("#slider").slideUp("slow");
    });
    $("#slidedown").click(function () {
        $("#slider").slideDown("slow");
    });
    $("#slidetoggle").click(function () {
        $("#slider").slideToggle("slow");
    });
});