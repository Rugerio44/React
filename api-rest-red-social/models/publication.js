const {Schema, model} = require('mongoose');

const PublicationSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  file: { type: String },
  create_at: { type: Date, default: Date.now },
});

module.exports = model('Publication', PublicationSchema, 'publications');