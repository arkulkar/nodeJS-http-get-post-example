/**
 * Created by arkulkar on 3/22/2016.
 */
angular.module('web1').controller("mainCtrl", demo);
function demo ($scope, $http){
    $scope.hello = 'hello';
    var data = {native : 'dharwad', state : 'karnataka', country : 'India', aboutme : 'I love writing code and love more deleting the code'};
    $scope.getCall = function(){
        $http.get('/web/akshata/female?graduation=MTech&employed=intel&designation=developer')
            .then(successCallback, errorCallback);
    };
    $scope.postCall = function(){
        $http.post('/web/akshata/female?graduation=MTech&employed=intel&designation=developer',data)
            .then(successCallback, errorCallback);
    };
    function successCallback(res){
      $scope.res = res.data;
    }
    function errorCallback(err){
        $scope.err = err.data;
    }
}