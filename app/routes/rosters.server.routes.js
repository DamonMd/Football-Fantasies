'use strict';

module.exports = function(app) {
	var rosters = require('../../app/controllers/rosters.server.controller');
	var users = require('../../app/controllers/users.server.controller');

	app.route('/rosters')
			.get(rosters.list)
			.post(users.requiresLogin, rosters.create);

	app.route('/rosters/:rosterId')
		.get(rosters.read)
		.put(users.requiresLogin, rosters.update)
		.delete(users.requiresLogin, rosters.delete);

	// What's this? Where the rosterId is present in the URL
	// the logic to 'get by id' is handled by this single function
	// and added to the request object i.e. request.category.
	app.param('rosterId', rosters.rosterByID);

};
