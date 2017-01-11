var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
//prevents the code from running until the DOM is ready for Java script code to execute.
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    //turn content of var number1 from string into int. return val.
    var number2 = parseInt($("#add2").val());
    //turn content of var number2 from string into int. return val.
    var result = add(number1, number2);
    //store result of var add in var result.
    $("#output").text(result);
    //place content of var result in div output in form of text.
    event.preventDefault();
    //stops the default action of an element from running. In this case the form from submitting.
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = add(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  })
});
