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
            $scope.settings.content_loading = false;
        }, 500);

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

        // Go to page num.
        $scope.goToPage = function(pageNum){
            $scope.settings.currentPage = pageNum;
        };
    };

    // Register controller.
    controllers.controller("bnheHomepageCtrl", ["$scope", "$timeout", Controller]);

})(window);