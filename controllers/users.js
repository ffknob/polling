const User = require('../models/user');

exports.getAll = (req, res, next) => {
	User
	.find()
	.populate('createBy')
	.execPopulate()
	.then(users => {
		res.status(200).json(users);
	})
	.catch(err => next(err));
};

exports.get = (req, res, next) => {
	const _id = req.params._id;

	User
	.findById(_id)
	.populate('createBy')
	.execPopulate()
	.then(user => {
		res.status(200).json(user);
	})
	.catch(err => next(err));
};

exports.create = (req, res, next) => {
	const user = req.user;
	const username = req.body.username;
	const name = req.body.name;
	const email = req.body.email;

	const newUser = new User({
		username: username,
		name: name,
		email: email
	});
	
	newUser
	.save()
	.then(createdUser => {
		res.status(200).json(createdUser);
	})
	.catch(err => next(err));
};

exports.update = (req, res, next) => {
	const _id = req.params._id;
	const username = req.body.username;
	const name = req.body.name;
	const email = req.body.email;

	User
	.findById(_id)
	.then(cart => {
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
