$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const city = parseInt($("#city").val());
    const time = parseInt($("#time").val());
    const pace = parseInt($("#pace").val());
    const work = parseInt($("#work").val());
  
  
    if (city + time + work + pace < 5 ) {
    $("#ruby").show();
    $("#again").show();
    $("#closer").show();
    $("#greeting").hide();
    $("#rust").hide();
    $("#python").hide();
    $("#ideal-city").hide();
    $("#time-of").hide();
    $("#workey").hide();
    $("#good-boss").hide();
    $("#work-life").hide();
    $("#start").hide();
    } else if (city + time + work + pace > 8) {
    $("#rust").show();
    $("#again").show();
    $("#closer").show();
    $("#greeting").hide();
    $("#ruby").hide();
    $("#python").hide();
    $("#ideal-city").hide();
    $("#time-of").hide();
    $("#workey").hide();
    $("#good-boss").hide();
    $("#work-life").hide();
    $("#start").hide();
    } else {
    $("#python").show();
    $("#again").show();
    $("#closer").show();
    $("#greeting").hide();
    $("#rust").hide();
    $("#ruby").hide();
    $("#ideal-city").hide();
    $("#time-of").hide();
    $("#workey").hide();
    $("#good-boss").hide();
    $("#work-life").hide();
    $("#start").hide();
    }
  });
});
