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
    };

    // Register controller.
    controllers.controller("bnheHomepageCtrl", ["$scope", "$timeout", Controller]);

})(window);