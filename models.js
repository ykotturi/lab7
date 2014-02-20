
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
   get "title"
   get "date"
   get "summary"
   get "image"
});

exports.Project = Mongoose.model('Project', ProjectSchema);


