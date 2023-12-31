/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/* global angular */

var app = angular.module("app", []);
app.controller("quoteController", function ($scope, $http)
{


    $scope.insertQuote = function () {
        $scope.wait = true;
        $http.get("https://api.quotable.io/quotes/random").then(function (response)
        {
            $scope.wait = false;
            console.log(response.data);
            $scope.quotes = response.data;
        });
    };
});