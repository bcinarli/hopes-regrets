/**
 * // System Controller
 * Common jobs.
 */
(function(window){
    "use strict";

    // Get namespaces.
    var BNHE        = window.BenNeHaltEttim,
        controllers = BNHE.modules.controllers;

    // Controller function.
    var Controller = function($scope, $timeout, $rootScope){

        // General model.
        $scope.model = {};

        // General settings holder.
        $scope.settings = {
            page_loading    : false,
            show_content    : false,
            content_loading : false,
            recalculate     : 0
        };

        // Callbacks
        $scope.callbacks = {
            swipeLeft : null,
            swipeRight: null
        };

        // Touch events.
        $scope.swipeLeft    = function(){
            typeof $scope.callbacks.swipeLeft === "function" && $scope.callbacks.swipeLeft();
        };
        $scope.swipeRight   = function(){
            typeof $scope.callbacks.swipeRight === "function" && $scope.callbacks.swipeRight();
        };

        // Change page.
        $scope.changePage = function(pageNum){

            $scope.settings.content_loading = true;

            // Fake delay.
            $timeout(function(){
                // Redirect to main page.
                $scope.settings.content_loading = false;

                switch(pageNum){
                    case 1:
                        $rootScope.initPie(true);
                        $scope.settings.recalculate++;
                        break;
                    case 3:
                        $rootScope.initPie(true);
                        $scope.settings.recalculate++;
                        $timeout(function(){
                            $scope.settings.pushed = true;
                        }, 5000);
                        break;
                }
            }, 1500);

            $scope.settings.currentPage = pageNum;
        }
    };

    // Register controller.
    controllers.controller("bnheSystemCtrl", ["$scope", "$timeout", "$rootScope", Controller]);

})(window);