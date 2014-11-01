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
            content_loading : false
        };
    };

    // Register controller.
    controllers.controller("bnheSystemCtrl", ["$scope", Controller]);

})(window);