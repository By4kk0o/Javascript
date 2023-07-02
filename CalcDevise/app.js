function convert() {
    var amount = parseFloat(document.getElementById('amount').value);
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;

    // Appel à un service de conversion de devise (exemple simplifié)
    var rate = getExchangeRate(from, to);

    var result = amount * rate;

    document.getElementById('result').innerHTML = amount + ' ' + from + ' = ' + result + ' ' + to;
}

function getExchangeRate(from, to) {
    // Taux de change fictifs pour les devises
    var rates = {
        USD: { EUR: 0.85, GBP: 0.72, JPY: 110.5, CAD: 1.21 },
        EUR: { USD: 1.18, GBP: 0.85, JPY: 129.47, CAD: 1.42 },
        GBP: { USD: 1.39, EUR: 1.18, JPY: 150.28, CAD: 1.65 },
        JPY: { USD: 0.009, EUR: 0.0077, GBP: 0.0067, CAD: 0.011 },
        CAD: { USD: 0.82, EUR: 0.71, GBP: 0.61, JPY: 87.89 }
    };

    return rates[from][to];
}
