'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Validations????

/**
 * Player Schema
 */
var PlayerSchema = new Schema({
	// Player model fields
	position: {type: String},
  playerName: {type: String},
	playerTeamName: {type: String},
	positionRank: {type: Number},
	overallRank: {type: Number},
	nerdRank: {type: Number} 
});

mongoose.model('Player', PlayerSchema);
