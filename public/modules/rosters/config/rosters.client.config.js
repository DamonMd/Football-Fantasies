'use strict';

// Rosters module config
angular.module('rosters').run(['Menus',
	function(Menus) {
		//Set Top Navbar Menu options for Rosters
		Menus.addMenuItem('topbar', 'Rosters', 'rosters', 'dropdown', 'rosters(/create)?');
		Menus.addSubMenuItem('topbar', 'rosters', 'List Rosters', 'rosters');
		Menus.addSubMenuItem('topbar', 'rosters', 'Create Roster', 'rosters/create');
	}
]);
