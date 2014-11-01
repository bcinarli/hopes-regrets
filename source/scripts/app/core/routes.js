/**
 *  Routes
 */
(function(window, angular){
    "use strict";

    // Get general namespaces.
    var BNHE    = window.BenNeHaltEttim,
        routes  = BNHE.modules.routes;

    // Route Provider.
    var RouteProvider = function($routeProvider, bnheSystemProvider){

        // Route list.
        var routes = [
            {
                id          : 1,
                auth        : 0,
                order       : 0,
                type        : "guest",
                route       : "welcome",
                controller  : "bnheWelcomeCtrl",
                templateUrl : "welcome.tpl"
            },
            {
                id          : 2,
                auth        : 0,
                order       : 0,
                type        : "user",
                route       : "homepage",
                controller  : "bnheHomepageCtrl",
                templateUrl : "homepage.tpl"
            }
        ];

        // Get system.
        var bnheSystem = bnheSystemProvider.$get();

        // Is Route API extended?
        var isRouteAPIExtended = false;

        // Route API
        var RouteAPICore = {
            // Get transformed function.
            // Original call has to performed with route.id, but methods will be called with route object.
            run: function(funcName, getterFunction){
                // Assign default getter function.
                if (typeof getterFunction === "undefined") getterFunction = "getRouteById";

                // Return wrapped function.
                return function(id){
                    // Get args.
                    var args = Array.prototype.slice.call(arguments, 1);

                    // Get route.
                    var route = RouteAPICore[getterFunction](id);

                    // Add to arguments.
                    args.unshift(route);

                    // Call function.
                    return RouteAPICore[funcName].apply(RouteAPICore, args);
                };
            },

            // Hold current route.
            currentRoute: null,

            // return current route.
            getCurrentRoute: function(){
                return RouteAPICore.currentRoute;
            },

            // Get full route list.
            getRouteList: function(){
                return routes;
            },

            // Search for route.
            getRoute: function(params){
                return _.find(routes, params);
            },

            // Get route type.
            getRouteType: function(route){
                return route.type;
            },

            // Get route by given id.
            getRouteById: function(id){
                return this.getRoute({id: +id});
            },

            // Get route by given path.
            getRouteByPath: function(path){
                return this.getRoute({route: path});
            },

            // Get route by given order.
            getRouteByOrder: function(order){
                return this.getRoute({order: order});
            },

            // Get full route path.
            getRoutePathById: function(route){
                return "/"+ route.route;
            },

            // Get route template url.
            getRouteTemplateUrl: function(route){
                return bnheSystem.addTemplatesDirectory(route.type +"/"+ route.templateUrl);
            },

            // Redirect route. *Extended
            redirectRoute: function($location, route, reloadController){
                $location.path(route.route, reloadController);
            },

            // Redirect route method.
            redirectRouteMethod: function(route, reloadController){
                this.redirectRoute(route, reloadController);
            }
        };

        // Export object for Route API.
        var RouteAPI = {
            getCurrentRoute     : RouteAPICore.getCurrentRoute,
            getRoute            : RouteAPICore.getRoute,
            getRouteList        : RouteAPICore.getRouteList,
            getRouteById        : RouteAPICore.getRouteById,
            getRouteByPath      : RouteAPICore.getRouteByPath,
            getRouteByOrder     : RouteAPICore.getRouteByOrder,
            getRouteTypeByOrder : RouteAPICore.run("getRouteType", "getRouteByOrder"),
            getRoutePathById    : RouteAPICore.run("getRoutePathById"),
            getFullUrl          : RouteAPICore.run("getFullUrl"),
            getRouteTemplateUrl : RouteAPICore.run("getRouteTemplateUrl"),
            redirectRouteByOrder: RouteAPICore.run("redirectRouteMethod", "getRouteByOrder"),
            redirectRouteById   : RouteAPICore.run("redirectRouteMethod", "getRouteById"),
            redirectRouteByPath : RouteAPICore.run("redirectRouteMethod", "getRouteByPath")
        };

        // Create an extended version of route api.
        var ExtendedRouteAPI = function(injections){
            // Return if already extended.
            if(isRouteAPIExtended) return RouteAPI;

            // Collect injections.
            var $location = injections.$location;

            // Extend methods.
            RouteAPICore.redirectRoute = _.curry(RouteAPICore.redirectRoute)($location);

            // Set extended true.
            isRouteAPIExtended = true;

            // Return route api.
            return RouteAPI;
        };

        // Get
        this.$get = ["$location", function($location){
            return ExtendedRouteAPI({
                $location: $location
            });
        }];

        // Config functions.
        var registerRoutes = function(){

            // Process all routes
            _.each(routes, function(route){
                // Route config to register.
                var routeConfig = {
                    resolve     : {
                        setCurrentRoute: ["$q", function($q){
                            RouteAPICore.currentRoute = route;
                            return $q.when();
                        }]
                    }
                };

                // Assign properties if exist.
                if(route.controller)    routeConfig.controller  = route.controller;
                if(route.templateUrl)   routeConfig.templateUrl = RouteAPI.getRouteTemplateUrl(route.id);

                // If template or templateUrl is not defined, add an empty template.
                if(!route.template && !route.templateUrl) routeConfig.template = " ";

                // Save all route info under routeConfig.routeInfo
                routeConfig.routeInfo = route;

                // Register route.
                $routeProvider.when(RouteAPI.getRoutePathById(route.id), routeConfig);
            });

            // Register otherwise.
            $routeProvider.otherwise({
                redirectTo: "/welcome"
            });
        };

        // Do automatic registration.
        registerRoutes();
    };

    // Register provider.
    routes.provider("bnheRoute", ["$routeProvider", "bnheSystemProvider", RouteProvider]);

})(window, angular);