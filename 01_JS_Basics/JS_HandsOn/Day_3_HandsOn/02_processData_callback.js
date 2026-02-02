// Excercise ---01----------------------------
function processData(data, callback) {
  console.log("Processing:", data);
  callback();
}
 
function done() {
  console.log("Done!");
}
 
processData("Test Data", done);

// output is:
// Processing: Test Data
// Done!