calc.controller('CalcController', function($scope) {
	$scope.inputAmount = 0;
	$scope.currency = {
		name: 'USD',
		title: 'доллары США',
		rate: 25.663049
	};
	// $scope.rates = {
	// 	usd: 25.66,
	// 	eur: 28.21
	// };
	$scope.setCurrency = function(curCode) {
		if (curCode==='USD') {
		$scope.currency.name = 'USD';
		$scope.currency.title = 'доллары США';
		$scope.currency.rate = 25.663049;
		} else if (curCode==='EUR') {
			$scope.currency.name = 'EUR';
			$scope.currency.title = 'евро'
			$scope.currency.rate = 28.21139;	
		} else {
			$scope.currency.name = 'GBP';
			$scope.currency.title = 'фунты стерлингов'
			$scope.currency.rate = 31.49823;
		};
	};
	$scope.res = function(inAmount) {
		return inAmount / $scope.currency.rate;
	 };
});