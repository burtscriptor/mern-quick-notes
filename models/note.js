const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    text: {type: String, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    
}, {
    timestamps: true,
    // Even though it's hashed - don't serialize the password
  
  });

module.exports = mongoose.model('Notes', noteSchema);