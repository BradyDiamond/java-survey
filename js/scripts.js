  // BUSINESS LOGIC
  // function add(name , city , time , work ) {
  //   return name + city + time + work ;
  // }
//
// UI LOGIC 

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const name = $("#name1").val();
    console.log ("name");
    const city = parseInt($("#city").val());
    const time = parseInt($("#time").val());
    const pace = parseInt($("#pace").val());
    const work = parseInt($("#work").val());
    const sum = (city + time + work + pace)
  
    console.log ("number");
    if (sum > 5) {
    // if (city + time + work + pace > 5) {
      $("#rust").show();
    // } else if (city + time + work + pace > 5) {
    // $("#Ruby").show();
    // } else if (city + time + work + pace > 5) {
    // $("#python").show(); 
    }
  });
});










// if (age > 21) {
//   $('#drinks').show();
// } else if (age === 21) {
//   alert("Now don't go wild!");
//   $('#drinks').show();
// } else {
//   $('#under-21').show();
// }