$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputNum = parseInt($("input#input").val());
    var total = 1
    function factorialize(num) {
      if (num === 0) {
      //       return -1;
      // }
      // else if (num == 0) {
          return 1;
      }
      else if (num > 0) {
          return (num * factorialize(num - 1));
      }
    }
    $("#output").text(factorialize(inputNum));
  });

});