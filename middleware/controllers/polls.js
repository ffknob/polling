const logger = require('../services/logger');

const Poll = require('../models/poll');
const Vote = require('../models/vote');

exports.getAll = (req, res, next) => {
	Poll
	.find()
	.populate('createdBy')
	.exec()
	.then(polls => {
		Promise.all(
			polls.map(poll => {
				return new Promise((resolve, reject) => {
					Vote
					.countDocuments({
						poll: poll._id
					})
					.then(count => resolve({ ...poll._doc, voteCount: count }))
					.catch(err => reject(err));
				});
			})
		)
		.then(polls => res.status(200).json(polls));
	})
	.catch(err => next(err));
};

exports.get = (req, res, next) => {
	const _id = req.params._id;

	Poll
	.findById(_id)
	.populate('createdBy')
	.exec()
	.then(async poll => {
		await Vote
		.countDocuments({
			poll: poll._id
		})
		.then(count => ({ ...poll._doc, voteCount: count }))
		.then(poll => res.status(200).json(poll))
		.catch(err => next(err));

	})
	.catch(err => next(err));
};

function createPoll(userId, title, question, options) {
	const poll = new Poll({
		title: title,
		question: question,
		options: options,
		createdBy: userId
	});
	
	return poll.save();
}

exports.create = (req, res, next) => {
	const user = req.user;
	const polls = req.body;

	let successes = 0;
	let failures = 0;
	let createdPolls = [];
	let failedPolls = [];
	
	if (Array.isArray(polls)) {
		Promise.all(
			polls
			.map(poll => 
				createPoll(user._id, poll.title, poll.question, poll.options)
				.then(poll => {
					successes++;
					createdPolls.push(poll);
				})
				.catch(err => {
					failures++;
					failedPolls.push({ ...poll, error: err });
					logger.error(err);
				})
			)
		)
		.then(() => res.status(200).json({
			totals: { successes: successes, failures: failures},
			createdPolls: createdPolls,
			failedPolls: failedPolls
		}))
		.catch(err => next(err));

	} else {
		const title = req.body.title;
		const question = req.body.question;
		const options = req.body.options;

		createPoll(user._id, title, question, options)
		.then(poll => {
			res.status(200).send(poll);
		})
		.catch(err => next(err));
	}
};

exports.update = (req, res, next) => {
	const _id = req.params._id;
    const title = req.body.title;
    const question = req.body.question;
    const options = req.body.options;

	Poll
	.findById(_id)
	.then(poll => {
		poll.title = title;
		poll.question = question;
		poll.options = options;

		poll
		.save()
		.then(poll => {
			res.status(200).json(poll);
		})
		.catch(err => next(err));
	})
	.catch(err => next(err));
};

exports.delete = (req, res, next) => {
	const _id = req.params._id;

	Poll
	.findByIdAndRemove(_id)
	.then(poll => {
		if (poll) {
			res.status(200).json(poll);
		} else {
			res.status(404).json({ message: `Poll ${_id} not found` });
		}
	})
	.catch(err => next(err));
};

exports.getVoteCount = (req, res, next) => {
	const _id = req.params._id;

	Vote
	.countDocuments({
		poll: _id
	})
	.then(count => res.status(200).json({ count: count }))
	.catch(err => next(err));
};
