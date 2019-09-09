const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now
	},
	createdBy: {
		type: mongoose.Types.ObjectId,
		required: false,
		ref: 'User'
	}
});

userSchema.query.byEmail = function(email) {
	return this.where({ email: new RegExp(email, 'i') });
};

userSchema.query.byUsername = function(username) {
	return this.where({ username: new RegExp(username, 'i') });
}

module.exports = mongoose.model('User', userSchema);
