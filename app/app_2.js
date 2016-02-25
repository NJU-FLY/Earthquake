/**
 * Created by FLY on 2016/2/8 0008.
 */

angular.module('mainApp', [
    'ngRoute',
    'mainApp.contentList',
    'mainApp.contentDetail'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/contentList'});
    }]);