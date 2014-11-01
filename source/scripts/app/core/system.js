/**
 * System
 * Url settings etc.
 */
(function(window, angular){
    "use strict";

    // Get general namespaces.
    var BNHE    = window.BenNeHaltEttim,
        system  = BNHE.modules.system;

    // Config Provider
    var Provider = function(){
        // Generate anti for templates.
        var antiCache = ((Math.random() * 1e6) | 0);

        // Config holder.
        var systemConfigs = {
            // Base url.
            baseUrl: "",

            // Templates directory.
            templatesDirectory: ""
        };

        // Change base url.
        this.setBaseUrl = function(newBaseUrl){
            systemConfigs.baseUrl = newBaseUrl;
        };

        // Change templates directory.
        this.setTemplatesDirectory = function(newTemplatesDirectory){
            systemConfigs.templatesDirectory = newTemplatesDirectory;
        };

        // System Get Function
        var Get = function (){

            // System
            var System = {
                // Start given url with base url.
                addBaseUrl: function(url){
                    return systemConfigs.baseUrl + url;
                },

                // Add base url and templates directory in front of given url.
                addTemplatesDirectory: function(url){
                    return systemConfigs.baseUrl + systemConfigs.templatesDirectory + url + "?v="+antiCache;
                }
            };

            // Provide system.
            return System;
        };

        // Provide service.
        this.$get = Get;
    };

    // Register provider.
    system.provider("bnheSystem", Provider);

})(window, angular);