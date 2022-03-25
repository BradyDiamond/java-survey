  // BUSINESS LOGIC
  // function add(name , city , time , work ) {
  //   return name + city + time + work ;
  // }
//
// UI LOGIC 

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    // const name = $("#name1").val();
    // console.log ("name");
    let city = parseInt($("#city").val());
    // const time = parseInt($("#time").val());
    // const pace = parseInt($("#pace").val());
    // const work = parseInt($("#work").val());
    // const sum = (city + time + work + pace)
  
    if (city <= 2) {
    // if (city + time + work + pace > 5) {
      $("#rust").show();
    // } else if (city + time + work + pace > 5) {
    // $("#Ruby").show();
    } else if  (city <= 2) {
    $("#python").show(); 
    }
  });
});