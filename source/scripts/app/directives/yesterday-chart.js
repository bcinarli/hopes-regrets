/**
 * // Yesterday Chart Directive
 */
(function(window){
    "use strict";

    // Get namespaces.
    var BNHE        = window.BenNeHaltEttim,
        directives  = BNHE.modules.directives;

    // Controller function.
    var Directive = function(){
        var pluginOptions = {
            //Boolean - Whether we should show a stroke on each segment
            segmentShowStroke : true,

            //String - The colour of each segment stroke
            segmentStrokeColor : "#fff",

            //Number - The width of each segment stroke
            segmentStrokeWidth : 2,

            //Number - The percentage of the chart that we cut out of the middle
            percentageInnerCutout : 50, // This is 0 for Pie charts

            //Number - Amount of animation steps
            animationSteps : 100,

            //String - Animation easing effect
            animationEasing : "easeOutBounce",

            //Boolean - Whether we animate the rotation of the Doughnut
            animateRotate : true,

            //Boolean - Whether we animate scaling the Doughnut from the centre
            animateScale : false,

            //String - A legend template
            legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
        };

        var yesterdayPercents = {
            cash    : -0.2,
            gold    : 1172 * 0.4,
            cocoa   : 2358 * -0.05,
            exchange: 0.1,
            nyse    : 0.1,
            estate  : -0.05
        };

        var tomorrowPercents = {
            cash    : 0.3,
            gold    : 1172 * 0.3,
            cocoa   : 2358,
            exchange: -0.1,
            nyse    : 0.2,
            estate  : -0.3
        };

        var radarDataMap = {
            cash    : "Cash",
            gold    : "Gold",
            cocoa   : "Cocoa",
            exchange: "Exchange",
            nyse    : "NYSE",
            estate  : "Real Estate"
        };

        var radarData = {
            labels: ["Cash", "Gold", "Cocoa", "Exchange", "NYSE", "Real Estate"],
            datasets: [
                {
                    label: "My Properties",
                    fillColor: "rgba(0,180,204, .2)",
                    strokeColor: "rgba(0,180,204, 1)",
                    pointColor: "rgba(0,140,158, 1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: []
                }
            ]
        };

        var pieDataColors = ["#343838", "#005F6B", "#008C9E", "#00B4CC", "#76D3DE"];

        var chart = null;

        // controller
        var Controller = function($scope, $rootScope){
            var ctrl = this;

            ctrl.radarData = null;
            ctrl.pieData = null;

            var resizeCanvas = function(){
                ctrl.canvas.canvas.width = 300;
                ctrl.canvas.canvas.height = 355;
            };

            ctrl.initRadar = $rootScope.initRadar = function(){
                resizeCanvas();
                chart = new Chart(ctrl.canvas).Radar(ctrl.radarData, pluginOptions);
            };

            ctrl.initPie = $rootScope.initPie = function(force){
                if(force) $scope.model.chartType = false;
                resizeCanvas();
                chart = new Chart(ctrl.canvas).Doughnut(ctrl.pieData, pluginOptions);
            };

            ctrl.reCalculate = function(){
                var percents = $scope.settings.currentPage === 1 ? yesterdayPercents : tomorrowPercents;

                var modelData = {};

                modelData.cash      = _.isNumber($scope.model.cash)      ? $scope.model.cash      : 0;
                modelData.gold      = _.isNumber($scope.model.gold)      ? $scope.model.gold      : 0;
                modelData.cocoa     = _.isNumber($scope.model.cocoa)     ? $scope.model.cocoa     : 0;
                modelData.exchange  = _.isNumber($scope.model.exchange)  ? $scope.model.exchange  : 0;
                modelData.nyse      = _.isNumber($scope.model.nyse)      ? $scope.model.nyse      : 0;
                modelData.estate    = _.isNumber($scope.model.estate)    ? $scope.model.estate    : 0;

                var _radarData = {
                    labels: [],
                    datasets: angular.copy(radarData.datasets)
                };

                var _pieData = [];

                var i = 0;
                _.each(modelData, function(value, key){
                    var value = modelData[key] + (percents[key] * modelData[key]),
                        name  = radarDataMap[key];

                    _radarData.labels.push(name);
                    _radarData.datasets[0].data.push(value);

                    _pieData.push({
                        value: value,
                        color: pieDataColors[i],
                        label: name
                    });
                    i++
                });

                ctrl.pieData = _pieData;
                ctrl.radarData = _radarData;

                $scope.model.chartType ? ctrl.initRadar() : ctrl.initPie();
            };
        };

        // Post link function.
        var postLink = function postLink(scope, element, attrs, controller){

            controller.canvas = $(element).find("canvas")[0].getContext("2d");

            scope.$watch("settings.recalculate",    controller.reCalculate);
            scope.$watch("model.cash",              controller.reCalculate);
            scope.$watch("model.gold",              controller.reCalculate);
            scope.$watch("model.cocoa",             controller.reCalculate);
            scope.$watch("model.exchange",          controller.reCalculate);
            scope.$watch("model.nyse",              controller.reCalculate);
            scope.$watch("model.estate",            controller.reCalculate);

            scope.$watch("model.chartType", function(newV){
                if(newV){
                    controller.initRadar();
                }else{
                    controller.initPie();
                }
            })
        };

        var directiveSettings = {
            restrict    : "A",
            templateUrl : "assets/templates/directives/yesterday-chart.tpl",
            link        : postLink,
            controller  : ["$scope", "$rootScope", Controller]
        };

        return directiveSettings;
    };

    // Register controller.
    directives.directive("yesterdayChart", Directive);

})(window);