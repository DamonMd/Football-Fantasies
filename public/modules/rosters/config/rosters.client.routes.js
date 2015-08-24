'use strict';

//Setting up route
angular.module('rosters').config(['$stateProvider',
	function($stateProvider) {
		// Rosters state routing
		$stateProvider.
		state('create-roster', {
			url: '/rosters/create',
			templateUrl: 'modules/rosters/views/create-roster.client.view.html'
		}).
		state('rosters', {
			url: '/rosters',
			templateUrl: 'modules/rosters/views/rosters.client.view.html'
		});
	}
]);
