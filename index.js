require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const logger = require('./services/logger');

const mongodbService = require('./services/mongodb');

const initService = require('./services/init');

const app = express();

const usersRoutes = require('./routes/users');

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*app.use((req, res, next) => {
	const APP_USER_ID = process.env.APP_USER_ID || '';
	User
	.findById(APP_USER_ID)

});*/
app.use('/users', usersRoutes);

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
