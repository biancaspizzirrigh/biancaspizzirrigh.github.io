$(document).ready(function() {
  /*
  click - done
  focus - done
  blur - done
  change - done
  ouseenter & mouseleave - done
  */

  $("#mySingleLineText").on("focus", function() {
      $("#log").append("<br/>Input Focus")
      $(this).css("background-color", "#EAF9E0") //changes the color of the input box when focuses
    })
    .on("blur", function() {
      $("#log").append("<br/>Input Change")
      $(this).css("background-color", "#FFFFFF") // reverts color back once no longer focuses
    });

  $("#mySingleLineText2").on("focus", function() {
      $("#log").append("<br/>Input Focus")
      $(this).css("background-color", "#EAF9E0") // same as above
    })
    .on("blur", function() {
      $("#log").append("<br/>Input Change")
      $(this).css("background-color", "#FFFFFF") // same as above
    });


  $("#myButton").on("mouseenter", function() {
      $("#log").append("<br/>Button Mouse Enter")
      $(this).text("Click Here") // changes button text to click here once mouse hovers over button
    })
    .on("mouseleave", function() {
      $("#log").append("<br/>Button Mouse Leave")
      $(this).text("Add To Cart") // reverts changes once mouse leaves button
    });

  $("#mySelect").on("change", function() { // appends/changes the message underneath the select box depending on what is selected
    $("#log").append("<br/>Change Selection")
    var val = $(this).val();
    $("#mySelectMessage").html(val + " selected"); //whatever the value of the selection is with the words selected
  });

  $("#myButton").on("click", function() { // when the button is clicked

    /*
        var myInput = $("#mySingleLineText").val();
        var myInput2 = $("#mySingleLineText2").val();
        var myTextArea = $("#myTextArea").val();
        var mySelect = $("#mySelect").val();
        var myRadio = $("[name='color']:checked").val();
    */


    $("#log").append("<br>User clicked the button!"); // log the values of the following object
    var userOrder = {}; // create new object
    userOrder.myInput = $("#mySingleLineText").val();
    userOrder.myInput2 = $("#mySingleLineText2").val();
    userOrder.myTextArea = $("#myTextArea").val();
    userOrder.mySelect = $("#mySelect").val();
    userOrder.myRadio = $("[name='color']:checked").val();
    userOrder.myCheckValues = [];

    //each is a jquery loop for objects/arrays
    $("[name='extra']:checked").each(function() {

      userOrder.myCheckValues.push($(this).val()); // pushes the values of each function onto the screen
    });


    // log all of these values onto the screen once the button is clicked
    $("#log").append("<br> Value of check is: " + userOrder.myCheckValues.join());
    $("#log").append("<br>Value of radio button is: " + userOrder.myRadio);
    $("#log").append("<br>Value of select is: " + userOrder.mySelect);
    $("#log").append("<br>Value of textarea is: " + userOrder.myTextArea);
    $("#log").append("<br>User clicked the button: " + userOrder.myInput + " " + userOrder.myInput2);
    $("#log").append("<br> Value of userOrder is " + " " + JSON.stringify(userOrder)); // prints the values of all properties within the object
  });


});