
  $(document).ready(function(){
    $("#ChartBTC").hide()
    $("#ChartETH").hide()
    $("#ChartXRP").hide()
    $("#ChartBCH").hide()
    $("#ChartLTC").hide()

    $("#BTCp").hover(function(){
    $("#ChartBTC").animate({
        height: 'toggle'
      });
    });

    $("#ETHp").hover(function(){
    $("#ChartETH").animate({
        height: 'toggle'
      });
    });

    $("#XRPp").hover(function(){
    $("#ChartXRP").animate({
        height: 'toggle'
      });
    });

    $("#BCHp").hover(function(){
    $("#ChartBCH").animate({
        height: 'toggle'
      });
    });

      $("#LTCp").hover(function(){
      $("#ChartLTC").animate({
        height: 'toggle'
      });
    });

  });

var currency = ["BCH", "BTC", "ETH", "LTC", "XRP"];

var currencyHistoricalCoinURL = "https://min-api.cryptocompare.com/data/histoday?aggregate=1&e=CCCAGG&extraParams=CryptoCompare&fsym=" + currency[0] + "&limit=3&tryConversion=false&tsym=USD";

$.ajax({
  url: currencyHistoricalCoinURL,
  method: "GET"
  })
  .then(function(response) {
    console.log(response.Data)
    var oneDayAgoDataBCH = response.Data[3].close;
    var twoDaysAgoDataBCH = response.Data[2].close;
    var threeDaysAgoDataBCH = response.Data[1].close;
    var fourDaysAgoDataBCH = response.Data[0].close


    var yesterday = response.Data[3].time;
    yesterday = moment(yesterday, "X").format("MMM D");
    var twoDaysAgo = response.Data[2].time;
    twoDaysAgo = moment(twoDaysAgo, "X").format("MMM D");
    console.log(twoDaysAgo);
    var threeDaysAgo = response.Data[1].time;
    threeDaysAgo = moment(threeDaysAgo, "X").format("MMM D");
    var fourDaysAgo = response.Data[0].time;
    fourDaysAgo = moment(fourDaysAgo, "X").format("MMM D");

    var currencyCurrentURL = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,BCH,LTC&tsyms=USD";

  $.ajax({
  url: currencyCurrentURL,
  method: "GET"
  })
  .then(function(response) {
    var currentBCH = response[currency[0]].USD;
    var currentBTC = response[currency[1]].USD;
    var currentETH = response[currency[2]].USD;
    var currentLTC = response[currency[3]].USD;
    var currentXRP = response[currency[4]].USD;

	var bch = $("#myChartBCH");
	var myChartBCH = new Chart(bch, {
    type: 'line',
    data: {
      labels: [fourDaysAgo, threeDaysAgo, twoDaysAgo, yesterday, "current price"],
      datasets: [{
      label: "Price (USD) of one BCH", 
      fill: false,
      data: [fourDaysAgoDataBCH,threeDaysAgoDataBCH, 
      twoDaysAgoDataBCH, oneDayAgoDataBCH, currentBCH],
      backgroundColor: [
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)'
      ],
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
          }
        }]
      }
    }
  });
	currencyHistoricalCoinURL = "https://min-api.cryptocompare.com/data/histoday?aggregate=1&e=CCCAGG&extraParams=CryptoCompare&fsym=" + currency[1] + "&limit=3&tryConversion=false&tsym=USD";
	$.ajax({
  url: currencyHistoricalCoinURL,
  method: "GET"
  })
  .then(function(response) {
	
	  var oneDayAgoDataBTC = response.Data[3].close;
    var twoDaysAgoDataBTC = response.Data[2].close;
    var threeDaysAgoDataBTC = response.Data[1].close;
    var fourDaysAgoDataBTC = response.Data[0].close

	var btc = $("#myChartBTC");
	var myChartBTC = new Chart(btc, {
    type: 'line',
    data: {
      labels: [fourDaysAgo, threeDaysAgo, twoDaysAgo, yesterday, "current price"],
      datasets: [{
        label: "Price (USD) of one Bitcoin", 
        fill: false,
        data: [fourDaysAgoDataBTC,threeDaysAgoDataBTC, 
      twoDaysAgoDataBTC, oneDayAgoDataBTC, currentBTC],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)'
        ],
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

  currencyHistoricalCoinURL = "https://min-api.cryptocompare.com/data/histoday?aggregate=1&e=CCCAGG&extraParams=CryptoCompare&fsym=" + currency[2] + "&limit=3&tryConversion=false&tsym=USD";
  $.ajax({
  url: currencyHistoricalCoinURL,
  method: "GET"
  })
  .then(function(response) {
    var oneDayAgoDataETH = response.Data[3].close;
    var twoDaysAgoDataETH = response.Data[2].close;
    var threeDaysAgoDataETH = response.Data[1].close;
    var fourDaysAgoDataETH = response.Data[0].close

    console.log(oneDayAgoDataETH);

  var eth = $("#myChartETH");
  var myChartETH = new Chart(eth, {
    type: 'line',
    data: {
      labels: [fourDaysAgo, threeDaysAgo, twoDaysAgo, yesterday, "current price"],
      datasets: [{
        label: "Price (USD) of one ETH", 
        fill: false,
        data: [fourDaysAgoDataETH,threeDaysAgoDataETH, 
      twoDaysAgoDataETH, oneDayAgoDataETH, currentETH],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)'
        ],
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

currencyHistoricalCoinURL = "https://min-api.cryptocompare.com/data/histoday?aggregate=1&e=CCCAGG&extraParams=CryptoCompare&fsym=" + currency[3] + "&limit=3&tryConversion=false&tsym=USD";
  $.ajax({
  url: currencyHistoricalCoinURL,
  method: "GET"
  })
  .then(function(response) {
    var oneDayAgoDataLTC = response.Data[3].close;
    var twoDaysAgoDataLTC = response.Data[2].close;
    var threeDaysAgoDataLTC = response.Data[1].close;
    var fourDaysAgoDataLTC = response.Data[0].close

    console.log(oneDayAgoDataETH);

  var ltc = $("#myChartLTC");
  var myChartLTC = new Chart(ltc, {
    type: 'line',
    data: {
      labels: [fourDaysAgo, threeDaysAgo, twoDaysAgo, yesterday, "current price"],
      datasets: [{
        label: "Price (USD) of one LTC", 
        fill: false,
        data: [fourDaysAgoDataLTC,threeDaysAgoDataLTC, 
      twoDaysAgoDataLTC, oneDayAgoDataLTC, currentLTC],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)'
        ],
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

  currencyHistoricalCoinURL = "https://min-api.cryptocompare.com/data/histoday?aggregate=1&e=CCCAGG&extraParams=CryptoCompare&fsym=" + currency[4] + "&limit=3&tryConversion=false&tsym=USD";
  $.ajax({
  url: currencyHistoricalCoinURL,
  method: "GET"
  })
  .then(function(response) {
    var oneDayAgoDataXRP = response.Data[3].close;
    var twoDaysAgoDataXRP = response.Data[2].close;
    var threeDaysAgoDataXRP = response.Data[1].close;
    var fourDaysAgoDataXRP = response.Data[0].close

  var xrp = $("#myChartXRP");
  var myChartXRP = new Chart(xrp, {
    type: 'line',
    data: {
      labels: [fourDaysAgo, threeDaysAgo, twoDaysAgo, yesterday, "current price"],
      datasets: [{
        label: "Price (USD) of one XRP", 
        fill: false,
        data: [fourDaysAgoDataXRP,threeDaysAgoDataXRP, 
      twoDaysAgoDataXRP, oneDayAgoDataXRP, currentXRP],
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)'
        ],
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

});
});
});
});
});
});