// Currency Ticker
var currencyURL = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,BCH,LTC&tsyms=USD";

    $(function(){
        setInterval(oneSecondFunction, 10000);
    });

    function oneSecondFunction() {
        var currencyURL = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,BCH,LTC&tsyms=USD";

        $.ajax({
            url: currencyURL,
            method: "GET"
        })
        .then(function(response) {


            $("#BTC").text(response.BTC.USD);
            $("#ETH").text(response.ETH.USD);
            $("#XRP").text(response.XRP.USD);
            $("#BCH").text(response.BCH.USD);
            $("#LTC").text(response.LTC.USD);

        });
    };