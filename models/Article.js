var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

  title: {
    type: String,
    trim: true,
    required: true
  },

  link: {
    type: String,
    required: true,
    unique:true
  },

  date: {
      type: String,
      trim: true
  },

  saved: {
      type: Boolean,
      default: false
  }
},{
    timestamps : true
});


var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
