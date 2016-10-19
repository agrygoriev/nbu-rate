app.controller('MainController', ['$scope', function($scope) {
	$scope.title = 'Starting Book End';
	$scope.promo = 'Best books of Month';
	$scope.products = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03','08'),
      cover: 'img/book-of-trees.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0,
    dislikes: 0
  	},
    { 
    name: 'The Trespasser: A Novel', 
    price: 16.20, 
    pubdate: new Date('2016', '10', '04'), 
    cover: 'img/trespasser.jpg',
    likes: 0,
    dislikes: 0
  	},
    { 
    name: 'Today Will Be Differentl', 
    price: 16.20, 
    pubdate: new Date('2016', '10', '04'), 
    cover: 'img/today-different.jpg',
    likes: 0,
    dislikes: 0
  	},
  	];
  	$scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
	$scope.minusOne = function(index) { 
  	$scope.products[index].dislikes += 1; 
	};
}]);