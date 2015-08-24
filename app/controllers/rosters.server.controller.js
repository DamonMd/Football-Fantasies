'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Roster = mongoose.model('Roster'),
    _ = require('lodash');

/**
 * Create a Roster
 */
 exports.create = function(req, res) {
   var roster = new Roster(req.body);

   roster.save(function(err){
     if (err) {
       return res.status(400).send({
         message: errorHandler.getErrorMessage(err)
       });
     } else {
       res.status(201).json(roster);
     }
   });

 };

 /**
  * Show the current Roster
  */
 exports.read = function(req, res) {
   Roster.findById(req.params.rosterId).exec(function(err, roster){
     if (err) {
          return res.status(400).send({
              message: errorHandler.getErrorMessage(err)
          });
      } else {
        if(!roster){
          return res.status(404).send({
            message: 'Roster not found'
          });
        }
        res.json(roster);
      }
   });
 };

 /**
  * Update a Roster
  */
 exports.update = function(req, res) {
   var roster = req.roster;

   roster = _.extend(roster, req.body);

   roster.save(function(err){
     if(err){
       return res.status(400).send({ message: errorHandler.getErrorMessage(err)});
     } else {
       res.json(roster);
     }
   });

 };

 /**
  * Delete an Roster
  */
 exports.delete = function(req, res) {
   var roster = req.roster;

   roster.remove(function(err){
     if(err){
       return res.status(400).send({ message: errorHandler.getErrorMessage(err)});
     } else {
       res.json(roster);
     }
   });
 };

 /**
  * List of Categories
  */
 exports.list = function(req, res) {
     Roster.find().exec(function(err, rosters) {
         if (err) {
             return res.status(400).send({
                 message: errorHandler.getErrorMessage(err)
             });
         } else {
             res.json(rosters);
         }
     });
 };

 exports.rosterByID = function(req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Roster is invalid'
		});
	}

	Roster.findById(id).exec(function(err, roster) {
		if (err) return next(err);
		if (!roster) {
			return res.status(404).send({
  				message: 'Roster not found'
  			});
		}
		req.roster = roster;
		next();
	});
};
