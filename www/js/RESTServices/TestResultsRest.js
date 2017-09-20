angular.module('RESTServices')
.service('TestResultsRest', ['$http', function ($http) {
    var TestResultsRest = this;
    var apiURL = 'https://tktest-tammylam.c9users.io/api/TestResults'
    TestResultsRest.save = function (test) {
        return $http ({
            url: apiURL,
            method: 'POST',
            data: test
        });
    };
    
    TestResultsRest.get = function (token, userId) {
        return $http ({
            url: "https://tktest-tammylam.c9users.io/api/TestResults?filter[where][userID]=" + userId,
            method: 'GET',
             headers: {
                  'Authorization': token
              }
        });
    };
    
}]);
