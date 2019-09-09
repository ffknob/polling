require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const logger = require('./services/logger');

const mongodb = require('./services/mongodb');

const app = express();

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', (req, res, next) => console.log('OK'));

app.use((err, req, res, next) => {
	logger.error(err);
	res.status(500).send(`Internal Server Error: ${err}`);
});

mongodb
	.connect()
	.then(connection => {
		const PORT = process.env.PORT || 3000;
		app.listen(PORT, () => {
			logger.info(`Server listening on port ${PORT}...`);
		});
	})
	.catch(err => {
		logger.error(err);
	});
