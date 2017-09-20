angular.module('starter.controllers')
    .controller('loginCtrl', ['$scope', 'SSFUsersRest', '$state','$window',
    function($scope, SSFUsersRest, $state, $window) {

        $scope.user = {};
        $scope.accessForm = function(form) {
                if (form.$invalid) {
                    return alert("Please fill in your email and password.");
                }

                SSFUsersRest.display($scope.user).then(function(response) {
                    // handle different responses and decide what happens next
                    if (response.status == 200) {
                        $window.localStorage.token=response.data.id;
                        $window.localStorage.userId=response.data.userId;
                        
                        $state.go("lobby");
                    
                }}, function(err) {
                    if (err.status == 401) {
                        alert("401 error");
                    }else if (err.status == 403) {
                        alert("403 error");    
                    }else if (err.status == 404) {
                        alert("Server not found");
                    }else if (err.status == 500) {
                        alert("The world has ended, or the server just isn’t online");
                    }
                    return err;
                });
        };

    }]);