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
        $scope.model = {
            active      : "",
            cash        : "",
            gold        : "",
            cocoa       : "",
            exchange    : "",
            nyse        : "",
            estate      : ""
        };

        // Show input setting.
        $scope.settings.showInput   = false;
        $scope.settings.inputIndex  = 0;

        // Model map with index.
        var modelMap = [null, "cash", "gold", "cocoa", "exchange", "nyse", "estate"];

        // Keep last clicked input.
        var lastClicked = 0;

        // Show input of element.
        $scope.toggleInput = function(inputNum){
            if($scope.settings.showInput) return;

            lastClicked = inputNum;
            $scope.settings.showInput = true;
            $scope.settings.inputIndex = inputNum;
            $scope.model.active = $scope.model[modelMap[lastClicked]];
        };

        $scope.closeInput = function(){
            $scope.settings.showInput   = false;
            $scope.settings.inputIndex  = 0;
            $scope.model.active         = "";
        };

        $scope.$watch('model.active', function(newV){
            if(!$scope.settings.showInput) return;
            $scope.model[modelMap[lastClicked]] = newV;
        });
    };

    // Register controller.
    controllers.controller("bnheHomepageCtrl", ["$scope", "$timeout", Controller]);

})(window);