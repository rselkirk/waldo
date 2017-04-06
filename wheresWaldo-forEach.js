// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(entry) {
  //for (var i = 0; i < arr.length; i++) {
    if (entry === "Waldo") {
      found(arr.indexOf(entry));   // execute callback
    }
  })
}

function actionWhenFound(x) {
  console.log("Found him at index" + x + " !");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);