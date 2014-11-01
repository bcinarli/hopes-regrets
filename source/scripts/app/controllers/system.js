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
    var Controller = function($scope){

        // General model.
        $scope.model = {};

        // General settings holder.
        $scope.settings = {
            page_loading    : false,
            show_content    : false,
            content_loading : false
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
    };

    // Register controller.
    controllers.controller("bnheSystemCtrl", ["$scope", Controller]);

})(window);