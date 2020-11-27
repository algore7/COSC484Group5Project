
const mongoose = require('mongoose');//Import necessary module
const Schema = mongoose.Schema;
let ForumSchema  = new Schema({
    fName: String,
    fUsers: String,
    fComments: String,
    date :{
        type : Date,
        default : Date.now
    }
});
const Forum = mongoose.model('Forum', ForumSchema);

console.log('forum:',Forum.fName);

module.exports = Forum;//Exports the variable
