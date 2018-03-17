
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBEOYTz66FVaaTEWAJ3_GyuOU2bXJdQa7U",
    authDomain: "train-27da8.firebaseapp.com",
    databaseURL: "https://train-27da8.firebaseio.com",
    projectId: "train-27da8",
    storageBucket: "",
    messagingSenderId: "472509816215"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
 
  // 2. Button for adding Employees
  $("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDestination= $("#destination-input").val().trim();
  var trainStart = moment($("#time-input").val().trim(), "DD/MM/YY").format("X");
  var trainFreq = $("#freq-input").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    start: trainStart,
    freq: trainFreq
  };

  // Uploads employee data to the database
  database.ref().set(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.start);
  console.log(newTrain.freq);

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#freq-input").val("");
});
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainStart = childSnapshot.val().start;
  var trainFreq = childSnapshot.val().freq;

  // Employee Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainStart);
  console.log(trainFreq);

 
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" +trainDestination + "</td><td>" +
  trainStart + "</td><td>" + trainFreq );
});