const { Schema, model } = require('mongoose');

const FollowSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'User', required: true },
  followed: { type: Schema.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = model('Follow', FollowSchema);

