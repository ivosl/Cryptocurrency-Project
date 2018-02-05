var database = firebase.database();
var date = moment($("#dateInput").val().trim(), "MM-DD-YYYY").format("X");
     
 
 $(".whatif-date").on("click", function (event) {
  
  event.preventDefault()

   var dateEntered = $('#dateInput').val();

      if (!moment(dateEntered,'MM-DD-YYYY').isValid()) {
          $("#result").append('Invalid Date');
      } else {
          console.log('Valid Date');
      };
  
  //console.log("works")

  var investment = $("#investmentInput").val().trim();
  var dateFrom = moment($("#dateInput").val().trim(), "MM-DD-YYYY").format("X");

  database.ref().push({
    investment: investment,
    dateFrom: dateFrom
  });

  var currency = $("#whatif-dropbtn").text();
  var currencyArray = [];
  var historicalURL = "https://min-api.cryptocompare.com/data/pricehistorical?fsym=" + currency + "&tsyms=USD&ts=" + dateFrom;
  var currentURL = "https://min-api.cryptocompare.com/data/price?fsym=" + currency + "&tsyms=USD";

  console.log(currency);

    var curr = $("#whatif-dropbtn").text();
    currencyArray.push(curr);

  console.log(currencyArray);

    $.ajax({
          url: historicalURL,
          method: "GET"
        })
        .then(function(response) {
          
        console.log(response);
        for (var i = 0; i < currencyArray.length; i++) {

        var c = ($("#investmentInput").val() / response[currencyArray[i]].USD)
        }
        console.log(c);

        $.ajax({
              url: currentURL,
              method: "GET"
            })
          .then(function(response2) {

          console.log(response2);

          var final = (c * response2.USD)
          console.log(final);
          var money = final.toFixed(2);
          var p = $("<p>");

          $("#result").append(p);
          p.append("You would have $" + Number(money).toLocaleString('en'));

          });
        });
    });