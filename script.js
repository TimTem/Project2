// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************

// IIFE: Wrapping the entire script in an immediately invoked function expression
(function() {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10: Loop over the names array
  for (var i = 0; i < names.length; i++) {
    
    // STEP 11: Retrieve the first letter of the current name in the loop
    var firstLetter = names[i].charAt(0).toLowerCase(); // Get the first letter and convert it to lowercase

    // STEP 12: Compare the 'firstLetter' to lowercase 'j' and call the appropriate speaker
    if (firstLetter === 'j') {
      // If the name starts with 'j', call byeSpeaker's speak method
      byeSpeaker.speak(names[i]);
    } else {
      // If the name doesn't start with 'j', call helloSpeaker's speak method
      helloSpeaker.speak(names[i]);
    }
  }

})();
