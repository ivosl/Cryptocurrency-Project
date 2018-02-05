var config = {
  apiKey: "AIzaSyByTyY0xDLiY4IM3j3mpLYh_XUVyKnSPy0",
  authDomain: "crypto-fun-1750c.firebaseapp.com",
  databaseURL: "https://crypto-fun-1750c.firebaseio.com",
  projectId: "crypto-fun-1750c",
  storageBucket: "crypto-fun-1750c.appspot.com",
  messagingSenderId: "899224804893"
};

firebase.initializeApp(config);

var database = firebase.database();

function validateForm() {
  var guessInput = document.GuessForm.Guess;

  if (guessInput.value == "") {
    $("#tracker").append("Please enter a valid number.");
    guessInput.focus();
    return false;
  }
}


$(".guess-date").on("click", function (event) {

  var guess = $("#investmentInput").val().trim();
  var currency = $("#guess-dropbtn").text();
  var currencyArray = [];
  var currentURL = "https://min-api.cryptocompare.com/data/price?fsym=" + currency + "&tsyms=USD";
  var now = moment().format('MMMM Do YYYY, h:mm:ss a');

  validateForm();

  event.preventDefault()

  console.log(currency);

  var curr = $("#guess-dropbtn").text();
  currencyArray.push(curr);

  console.log(currencyArray);

  $.ajax({
        url: currentURL,
        method: "GET"
      })
      .then(function(response) {
          
      console.log(response);
      for (var i = 0; i < currencyArray.length; i++) {

      database.ref("current").push({
        guess: guess,
        price: response.USD,
        time: now,
        currency: currency
      });
      };
    });

    $(function(){
      setTimeout(timerFunction, 10000);
    });

    function timerFunction() {
      now = moment().format('MMMM Do YYYY, h:mm:ss a');
        $.ajax({
          url: currentURL,
          method: "GET"
        })
        .then(function(response) {
          
          //console.log(response);
          for (var i = 0; i < currencyArray.length; i++) {

            database.ref("updated").push({
              price2: response.USD,
              time2: now
            });
          }
        });
    };
});

database.ref("current").orderByChild("time").limitToLast(3).on("child_added", function(snapshot) {
      // storing the snapshot.val() in a variable for convenience
      var sv = snapshot.val();

      // Console.loging the last user's data
      console.log(sv);

      // // Change the HTML to reflect

        $("#tracker").append("<div>Guess: $" + sv.guess + "</div>");
        $("#tracker").append("<div>Current: $" + sv.price + "</div>");
        $("#tracker").append("<div>Currency: " + sv.currency + "</div>");
        $("#tracker").append("<div>" + sv.time +  "</div><br>");
});

database.ref("updated").orderByChild("time2").limitToLast(3).on("child_added", function(snapshot) {
      // storing the snapshot.val() in a variable for convenience
        var sv = snapshot.val();

      console.log(sv);
      //console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

      // // Change the HTML to reflect
        $("#tracker").append("<div>Current: $" + sv.price2 + "</div>");
        $("#tracker").append("<div>" + sv.time2 + "</div><br>");
});