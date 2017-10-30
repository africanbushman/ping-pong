function Math() {
  if (number % 3 === 0) {
    alert("Ping");
  } else if (number % 5 === 0) {
    alert("Pong");
  } else if (number % 3 && 5 === 0) {
    alert("Ping pong")
  // } else if (number % 3 === > 1) {
    // console.log();
  // } else(number % 5 === > 1) {
    // console.log();
  }
}
$("form#inputForm").submit(function (event) {
var numbers=parseInt($("input").val());

for (var index = 1; index <=numbers; index+=1) {
  if (index%3==0) {
    $(".output").append("<li>"+"Ping"+"</li>");
  } else {
    $(".output").append(index);
  }
}
event.preventDefault();
});
