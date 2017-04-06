// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(entry) {
  //for (var i = 0; i < arr.length; i++) {
    if (entry === "Waldo") {
      found(entry);   // execute callback
    }
  })
}

function actionWhenFound(i) {
  console.log("Found Waldo!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);