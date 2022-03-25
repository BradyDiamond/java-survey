  // BUSINESS LOGIC

//
// UI LOGIC 

$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
   // const flavor = $("input:radio[name=flavor]:checked").val();
    const firstName = $("#name1").val();
   // const result = (firstName + " " + lastName);
    //const receiptText = " Thank you for your Purchase!"

    $("#output").text(firstName);
    $("#output").show();
    $("#survey").hide();
  });
});