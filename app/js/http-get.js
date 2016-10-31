$http.get("http://apilayer.net/api/live?access_key=" + api_key + "&format=1")
            .success(function(response) {
                // get currency exchange data
                $scope.quotes = response.quotes;

                // get source currency (USD)
                $scope.sourceCurrency = response.source;
            });