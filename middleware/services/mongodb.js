require('dotenv').config();

const mongoose = require('mongoose');
const logger = require('./logger');

const MONGODB_HOST = process.env.MONGODB_HOST || 'locahost';
const MONGODB_USERNAME = process.env.MONGODB_USERNAME || 'user';
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || 'password';
const MONGODB_DATABASE = process.env.MONGODB_DATABASE || 'test';

const CONNECTION_STRING = `mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DATABASE}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose.connection.on('connecting', () => logger.info('Connecting...'));
mongoose.connection.on('connected', () => logger.info('Connected'));
mongoose.connection.on('diconnecting', () => logger.info('Disconnecting...'));
mongoose.connection.on('diconnected', () => logger.info('Disconnected'));
mongoose.connection.on('error', () => logger.error('Error'));

exports.connect = () => {
	return mongoose.connect(CONNECTION_STRING, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false
	});
};
