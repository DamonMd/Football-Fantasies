'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Validation
function validateLength(category){
	return category.length <= 15;
}

/**
 * Roster Schema
 */
var RosterSchema = new Schema({
	// Roster model fields
	created: {
	type: Date,
	default: Date.now
},
name:{
	type: String,
	default: ' ',
	trim: true,
	unique: true,
	required: 'name cannot be blank',
	validate: [validateLength, 'name must be 15 chars in length or less']
},
createdBy:{
	type: mongoose.Schema.Types.ObjectId,
	ref: 'User'
},
players: ['Player']
});

mongoose.model('Roster', RosterSchema);
