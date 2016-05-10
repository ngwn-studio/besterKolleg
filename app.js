var app = angular.module("app",[]);

app.controller("SiteController",function($scope){
    $scope.menuOpen = false;
    $scope.switchMenu = function(){
        $scope.menuOpen = !$scope.menuOpen;
    };
});