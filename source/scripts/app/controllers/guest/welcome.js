/**
 * // Page Controller
 */
(function(window){
    "use strict";

    // Get namespaces.
    var BNHE        = window.BenNeHaltEttim,
        controllers = BNHE.modules.controllers;

    // Controller function.
    var Controller = function($scope, $timeout, bnheRoute){

        // Start page loading.
        $scope.settings.page_loading = true;
        $scope.settings.content_loading = false;

        // Fake delay.
        $timeout(function(){
            // Redirect to main page.
            bnheRoute.redirectRouteById(2);
        }, 2000);
    };

    // Register controller.
    controllers.controller("bnheWelcomeCtrl", ["$scope", "$timeout", "bnheRoute", Controller]);

})(window);