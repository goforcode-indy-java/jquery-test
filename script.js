
const url = "http://jservice.io/api/random";

function success(data) {
  console.log("Question: " + data[0].question)
  console.log("Answer: " + data[0].answer)
}

$.get(url, success);

$('#christmasElf').css('display', 'none');
