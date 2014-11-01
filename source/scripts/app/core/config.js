/**
 *  Configure system.
 *
 *  Developers
 *  - Rameş Aliyev
 *
 */
(function(window, angular){
    "use strict";

    // Get general namespaces.
    var BNHE        = window.BenNeHaltEttim,
        system      = BNHE.modules.system;

    // Configure system.
    var SystemConfig = function($sceProvider, bnheConfigDefault, bnheSystemProvider){

        // Disable sce.
        $sceProvider.enabled(false);

        // Url Configuration func.
        var ConfigureSystemUrls = function(config){
            // Configure base url.
            if(config.baseUrl) bnheSystemProvider.setBaseUrl(config.baseUrl);

            // Configure templates directory.
            if(config.templatesDirectory) bnheSystemProvider.setTemplatesDirectory(config.templatesDirectory);
        };

        // Configure system with default values.
        ConfigureSystemUrls(bnheConfigDefault);
    };

    // Config system.
    system.config(["$sceProvider", "bnheConfig.Defaults", "bnheSystemProvider", SystemConfig]);

})(window, angular);