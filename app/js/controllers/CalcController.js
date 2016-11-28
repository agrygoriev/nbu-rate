calc.controller('CalcController', function($scope, $http, $filter) {
	$scope.inputAmount = 0;
	$scope.inputDate = new Date();
	$scope.rateDate = $filter('date')($scope.inputDate, 'yyyyMMdd');
	$scope.currency = {
		name: 'USD',
		title: 'доллары США',
		rate: 0,
		date: $filter('date')($scope.inputDate, 'dd.MM.yyyy')
	};
	$scope.getRate = function(curCode, date) {
		this.curCode = curCode;
		this.date = $filter('date')(date, 'yyyyMMdd');
		$scope.currency.date = $filter('date')(date, 'dd.MM.yyyy');
		var url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=" + this.curCode + "&date=" + this.date + "&json";
		$http.jsonp(url)
            .success(function(response) {
            	$scope.currency.name = response.cc;
                $scope.currency.title = response.txt;
                $scope.currency.rate = response.rate;
            });
	}
	// $scope.setCurrency = function(curCode) {
	// 	if (curCode==='USD') {
	// 	$scope.currency.name = 'USD';
	// 	$scope.currency.title = 'доллары США';
	// 	$scope.currency.rate = 25.663049;
	// 	} else if (curCode==='EUR') {
	// 		$scope.currency.name = 'EUR';
	// 		$scope.currency.title = 'евро'
	// 		$scope.currency.rate = 28.21139;	
	// 	} else {
	// 		$scope.currency.name = 'GBP';
	// 		$scope.currency.title = 'фунты стерлингов'
	// 		$scope.currency.rate = 31.49823;
	// 	};
	// };
	$scope.res = function(inAmount) {
		return inAmount / $scope.currency.rate;
	 };
});