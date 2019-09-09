const logger = require('../services/logger');

const User = require('../models/user');

exports.getAll = (req, res, next) => {
	User
	.find()
	.populate('createdBy')
	.exec()
	.then(users => {
		res.status(200).json(users);
	})
	.catch(err => next(err));
};

exports.get = (req, res, next) => {
	const _id = req.params._id;

	User
	.findById(_id)
	.populate('createdBy')
	.exec()
	.then(user => {
		res.status(200).json(user);
	})
	.catch(err => next(err));
};

function createUser(userId, username, name, email) {
	const user = new User({
		username: username,
		name: name,
		email: email,
		createdBy: userId
	});
	
	return user.save();
}

exports.create = (req, res, next) => {
	const user = req.user;
	const users = req.body;

	let successes = 0;
	let failures = 0;
	let createdUsers = [];
	let failedUsers = [];
	
	if (Array.isArray(users)) {
		Promise.all(
			users
			.map(user => 
				createUser(user._id, user.username, user.name, user.email)
				.then(user => {
					successes++;
					createdUsers.push(user);
				})
				.catch(err => {
					failures++;
					failedUsers.push({ ...user, error: err });
					logger.error(err);
				})
			)
		)
		.then(() => res.status(200).json({
			totals: { successes: successes, failures: failures},
			createdUsers: createdUsers,
			failedUsers: failedUsers
		}))
		.catch(err => next(err));

	} else {
		const username = req.body.username;
		const name = req.body.name;
		const email = req.body.email;

		createUser(user._id, username, name, email)
		.then(user => {
			res.status(200).send(user);
		})
		.catch(err => next(err));
	}
};

exports.update = (req, res, next) => {
	const _id = req.params._id;
	const username = req.body.username;
	const name = req.body.name;
	const email = req.body.email;

	User
	.findById(_id)
	.then(user => {
		user.username = username;
		user.name = name;
		user.email = email;

		user
		.save()
		.then(user => {
			res.status(200).json(user);
		})
		.catch(err => next(err));
	})
	.catch(err => next(err));
};

exports.delete = (req, res, next) => {
	const _id = req.params._id;

	User
	.findByIdAndRemove(_id)
	.then(user => {
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(404).json({ message: `User ${_id} not found` });
		}
	})
	.catch(err => next(err));
};
