require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const logger = require('./services/logger');

const mongodbService = require('./services/mongodb');
const User = require('./models/user');

const initService = require('./services/init');

const app = express();

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	const appUserUsername = process.env.APP_USER_USERNAME || 'polling';
	User
	.findOne()
	.byUsername(appUserUsername)
	.then(user => {
		req.user = user;
		next();
	})
	.catch(err => next(err));
});

const usersRoutes = require('./routes/users');
const pollsRoutes = require('./routes/polls');

app.use('/users', usersRoutes);
app.use('/polls', pollsRoutes);

app.use((err, req, res, next) => {
	logger.error(err);
	res.status(500).send(`Internal Server Error: ${err}`);
});

mongodbService
.connect()
.then(connection => {
	initService
	.init()
	.then(() => {
		const PORT = process.env.PORT || 3000;
		app.listen(PORT, () => {
			logger.info(`Server listening on port ${PORT}...`);
		});

	})
	.catch(err => logger.error(err));
})
.catch(err => {
	logger.error(err);
});
