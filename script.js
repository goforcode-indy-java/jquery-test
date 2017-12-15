
const url = "http://jservice.io/api/random";

function onSuccess(results) {
  console.log(results); // this will output my "results" object as an interactive, expandable array on my browser's console (Control+Shift+J should open your Chrome's console directly)

  // We see from the output from the above line, that our "data" variable is an array in this case.
  // jQuery's GET method has automatically converted the JSON response into a valid JavaScript object,
  // so we don't have to convert it from JSON into something we can work with directly.
  // This results array happens to contain one object. See below: We access that one object in the array with 
  // the bracket notation (myArray[0]). Then because that object's properties are valid variable names, 
  // we can access the contents via the dot notation (myObject.propertyname), which is more readable.
  console.log("Question: " + results[0].question);
  console.log("Answer: " + results[0].answer);
}

$.get(url, onSuccess); // DOCS: https://api.jquery.com/jQuery.get/
// ^ just like what I did on the whiteboard in class

$('#christmasElf').css('color', 'red'); // DOCS: https://api.jquery.com/css/
// ^ this bit is a CSS ID matching a SPAN tag in our HTML file, 
// but we could also be targeting other HTML elements 
// by using other valid CSS selectors (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
