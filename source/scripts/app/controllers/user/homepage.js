/**
 * // Page Controller
 */
(function(window){
    "use strict";

    // Get namespaces.
    var BNHE        = window.BenNeHaltEttim,
        controllers = BNHE.modules.controllers;

    // Controller function.
    var Controller = function($scope, $timeout){

        // Stop page loading.
        $scope.settings.page_loading = false;

        // Fake delay.
        $timeout(function(){
            // Redirect to main page.
            $scope.settings.content_loading = true;
        }, 500);

        // Fake delay.
        $timeout(function(){
            // Redirect to main page.
            $scope.settings.content_loading = false;
            $scope.settings.show_content = true;
        }, 1000);

        // Settings
        var pageCount = 3;

        // Scope settings;
        $scope.settings.currentPage = 2;

        // Touch events.
        $scope.callbacks.swipeLeft = function(){
            var currentPage = $scope.settings.currentPage;
            $scope.settings.currentPage = (currentPage + 1 > pageCount ? pageCount : currentPage + 1);
        };
        $scope.callbacks.swipeRight = function(){
            var currentPage = $scope.settings.currentPage;
            $scope.settings.currentPage = (currentPage - 1 === 0 ? 1 : currentPage - 1);
        };

        // Keep input states.
        $scope.inputStates = [];
        $scope.model = {
            cash    : null,
            exchange: null,
            gold    : null,
            nyse    : null,
            coffee  : null,
            estate  : null
        };
        var modelMap = ["cash", "gold", "coffee", "exchange", "nyse", "estate"];

        var lastClicked = 0;
        // Show input of element.
        $scope.toggleInput = function(inputNum){
            $scope.inputBlur(lastClicked);
            lastClicked = inputNum;
            $scope.inputStates[inputNum] = !$scope.inputStates[inputNum];
        };

        // On input blur.
        $scope.inputBlur = function(inputNum){
            var value = $scope.model[modelMap[inputNum]];
            if(value === 0 || typeof value === "undefined" || value === null){
                $scope.inputStates[inputNum] = false;
            }
        };
    };

    // Register controller.
    controllers.controller("bnheHomepageCtrl", ["$scope", "$timeout", Controller]);

})(window);