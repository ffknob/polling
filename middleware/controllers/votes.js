const logger = require('../services/logger');

const Vote = require('../models/vote');

exports.getAll = (req, res, next) => {
	Vote
	.find()
	.populate('voter')
	.exec()
	.then(votes => {
		res.status(200).json(votes);
	})
	.catch(err => next(err));
};

exports.get = (req, res, next) => {
	const _id = req.params._id;

	Vote
	.findById(_id)
	.populate('voter')
	.exec()
	.then(vote => {
		res.status(200).json(vote);
	})
	.catch(err => next(err));
};

function createVote(userId, pollId, multiplier) {
	const vote = new Vote({
        voter: userId,
        poll: pollId,
        multiplier: multiplier
	});
	
	return vote.save();
}

exports.create = (req, res, next) => {
	const user = req.user;
	const votes = req.body;

	let successes = 0;
	let failures = 0;
	let createdVotes = [];
	let failedVotes = [];
	
	if (Array.isArray(votes)) {
		Promise.all(
			votes
			.map(vote => 
				createVote(user._id, vote.pollId, vote.multiplier)
				.then(vote => {
					successes++;
					createdVotes.push(vote);
				})
				.catch(err => {
					failures++;
					failedVotes.push({ ...vote, error: err });
					logger.error(err);
				})
			)
		)
		.then(() => res.status(200).json({
			totals: { successes: successes, failures: failures},
			createdVotes: createdVotes,
			failedVotes: failedVotes
		}))
		.catch(err => next(err));

	} else {
		const pollId = req.body.pollId;
		const multiplier = req.body.multiplier;

		createVote(user._id, pollId, multiplier)
		.then(poll => {
			res.status(200).send(poll);
		})
		.catch(err => next(err));
	}
};

exports.update = (req, res, next) => {
	const _id = req.params._id;
    const pollId = req.body.pollId;
    const multiplier = req.body.multiplier;

	Vote
	.findById(_id)
	.then(vote => {
		vote.pollId = pollId;
		vote.multiplier = multiplier;

		vote
		.save()
		.then(vote => {
			res.status(200).json(vote);
		})
		.catch(err => next(err));
	})
	.catch(err => next(err));
};

exports.delete = (req, res, next) => {
	const _id = req.params._id;

	Vote
	.findByIdAndRemove(_id)
	.then(vote => {
		if (vote) {
			res.status(200).json(vote);
		} else {
			res.status(404).json({ message: `Vote ${_id} not found` });
		}
	})
	.catch(err => next(err));
};
