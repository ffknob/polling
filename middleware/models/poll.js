const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pollSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	question: {
		type: String,
		required: true
	},
	options: [{
		option: {
			type: String,
			required: true
		},
		votes: [{
			type: mongoose.Types.ObjectId,
			ref: 'Vote'
		}]
	}],
	createdBy: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now
	}
});

module.exports = mongoose.model('Poll', pollSchema);
