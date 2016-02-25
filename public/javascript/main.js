angular.module('TranslatorApp', [])

angular.module('TranslatorApp')
	.controller('translateController', ['$scope', '$http', function($scope, $http){
		$scope.from = '';
		$scope.to = '';
		$scope.word = '';
		$scope.translate = function(){
			// $scope.translation = 'blaa';
			var translationRequest = {
				from: $scope.from,
				to: $scope.to,
				word: $scope.word
			}
			$http.get('/api/translations', {data: JSON.stringify(translationRequest)});
			console.log(translationRequest);
		}
	}]);