$http.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=" + EUR + "&date=" + $scope.rateDate)
            .success(function(response) {
                // get currency exchange data
                $scope.quotes = response.quotes;

                // get source currency (USD)
                $scope.sourceCurrency = response.source;
            });