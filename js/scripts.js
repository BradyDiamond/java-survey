  // BUSINESS LOGIC
  function sum(name , city , time , work ) {
    return name + city + time + work ;
  }
//
// UI LOGIC 

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const name = $("#name1").val();
    const city = parseInt($("#city").val());
    const time = parseInt($("#time").val());
    const pace = parseInt($("#pace").val());
    const work = parseInt($("#work").val());
    const sum = (city + time + work + pace)
    // if (firstVal === secondVal && firstVal === thirdVal) {
    //   $('#Equilateral').show();
    //   } else if (firstVal === secondVal || firstVal === thirdVal) {
    //   $('#Isosceles').show();
    //   } else if (secondVal === thirdVal) {
    //   $('#Isosceles').show();
    //   } else if (firstVal !== secondVal && firstVal !== thirdVal && secondVal !== thirdVal) {
    //   $('#Scalene').show();
    
 
    
    if (city + time + work + pace < 5) {
    //   $("#rust").show();
    //   } else if (sum < 10) {
    //   $("#Ruby").show();
    //   } else {
    //  $("#python").show(); }
    $("#ruby").show();
    $("#ruby").text(city + time + work + pace+ "#ruby");
    } else if (city + time + work + pace > 5) {
    $("#rust").show();
    $("#rust").text(city + time + work + pace);
    }
  });
});