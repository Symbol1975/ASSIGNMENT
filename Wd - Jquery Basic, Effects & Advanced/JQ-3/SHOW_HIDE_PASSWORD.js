
// BUTTON SHOW / HIDE CLICK EFFECT JS

function myPass() {
  var x = document.getElementById("myInput");

  if (x.type === "password") {
    x.type = "text";
    $("#ShowBtn").hide();
    $("#HideBtn").show();
  } else {
    x.type = "password";
    $("#HideBtn").hide();
    $("#ShowBtn").show();
  }
}
