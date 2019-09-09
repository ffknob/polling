const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const voteSchema = new Schema({
	voter: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	poll: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: 'Poll'
	},
	multiplier: {
		type: Number,
		retuired: true,
		default: 1
	},
	voteAt: {
		type: Date,
		required: true,
		default: Date.now
	}
});

module.exports = mongoose.model('Vote', voteSchema);
