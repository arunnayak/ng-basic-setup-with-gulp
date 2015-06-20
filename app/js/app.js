var demoApp = angular.module('demoApp', ['ngRoute']);
    
    demoApp.config( function( $routeProvider ){

        $routeProvider.when('/', 
            {
                 
                controller: 'simpleController',
                templateUrl: '/Partials/view1.html'

            })
        .when('/view2', {
                 
                controller: 'simpleController',
                templateUrl: '/Partials/view2.html'
        })
        .otherwise({redirectTo: '/'});
    });
