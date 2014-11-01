/**
 * App
 */
(function(window, angular){
    "use strict";

    // Version Info
    var version = "1.0.0";

    // Create general namespace.
    var BNHE = window.BenNeHaltEttim = {
        modules: {},
        version: version
    };

    // Register modules.
    BNHE.modules.system       = angular.module("BNHE.System"        , []);
    BNHE.modules.controllers  = angular.module("BNHE.Controllers"   , []);
    BNHE.modules.filters      = angular.module("BNHE.Filters"       , []);
    BNHE.modules.directives   = angular.module("BNHE.Directives"    , []);
    BNHE.modules.services     = angular.module("BNHE.Services"      , ["ngResource", "ngCookies"]);
    BNHE.modules.routes       = angular.module("BNHE.Routes"        , ["ngRoute"]);
    BNHE.modules.app          = angular.module("BenNeHaltEttim"     , ["BNHE.System", "BNHE.Controllers", "BNHE.Filters", "BNHE.Directives", "BNHE.Services", "BNHE.Routes"]);

    // Configs.
    // Default Configs
    BNHE.modules.system.constant("bnheConfig.Defaults", {
        baseUrl                 : "",
        templatesDirectory      : "assets/templates/"
    });

})(window, angular);