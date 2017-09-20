/*global angular*/
angular.module('starter.controllers')
.controller('HistoryCtrl', ['$scope', '$window', '$state', 'tests', 'TKAnswersService', 'TKResultsButtonService',
function($scope, $window, $state, tests, TKAnswersService, TKResultsButtonService) {

    $scope.tests = tests === undefined ? [] : tests;
    
      $scope.goToResult = function(test)
    {
        var answers = {
        
		};
        TKAnswersService.setAnswers(answers);
        $state.go('results');
        TKResultsButtonService.setShouldShowMenuButton(false);
        $state.go('results');
    };
}]);
