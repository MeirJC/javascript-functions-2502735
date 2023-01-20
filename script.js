(function (a, b) {
  const $ = document.querySelector.bind(document);
  const output = a + b;
  $("#output").innerHTML = output;
  console.log(output);
})(2, 3);
