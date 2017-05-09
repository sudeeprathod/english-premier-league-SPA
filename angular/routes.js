//var myApp = angular.module('EplApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'appController',
            // what is the alias of that controller.
        	controllerAs 	: 'sudeep'
        })
        .when('/match-details/:date/:team1code',{
        	templateUrl     : 'views/match-details.html',
        	controller 		: 'MatchController',
        	controllerAs 	: 'currentMatch'
        })
        .when('/individual-teamVeiw/:teamcode',{

        	templateUrl     : 'views/individual-teamVeiw.html',
        	controller 		: 'TeamController',
        	controllerAs 	: 'singleTeam'
        })

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            });
        
}]);