var app = angular.module('studious', function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
	function FetchCtrl($scope, $http, $templateCache) {
	  $scope.method = 'GET';
	  $scope.url = '';
	  log.l("Test");

	  $scope.fetch = function() {
	    $scope.code = null;
	    $scope.response = null;
	 
	    $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
	      success(function(data, status) {
	        $scope.status = status;
	        $scope.data = data;
	        log.l(data);
	      }).
	      error(function(data, status) {
	        $scope.data = data || "Request failed";
	        $scope.status = status;
	        log.l("Request Failed");
	    });
	  };
	 
	  $scope.updateModel = function(method, url) {
	    $scope.method = method;
	    $scope.url = url;
	  };
	}

