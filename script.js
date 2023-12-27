"use strict";
(() => {
        function QuotesFetch() {
            let url = 'https://quotesapi.santosh0.com.np/api/quotes/';
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    document.getElementById("quotes").textContent = response[0].quotes;
                    document.getElementById("author").textContent = "- " + response[0].author;
                    setTimeout(QuotesFetch, 10000);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        QuotesFetch()

})();


