const { Schema, model } = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./Reaction');

const jobSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: 'Your job needs a title!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Job = model('Job', jobSchema);

module.exports = Job;
