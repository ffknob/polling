require('dotenv').config();

const logger = require('./logger');

const User = require('../models/user');

exports.init = () => {   
    const username = process.env.APP_USER_USERNAME || 'polling';
    const name = process.env.APP_USER_NAME || 'Polling';
    const email = process.env.APP_USER_EMAIL || 'polling@ffknob.com.br';
    
    return User
        .findOne()
        .byUsername(username)
        .exec()
        .then(user => {
            if (!user) {
                logger.info(`User ${username} not found.`);

                const appUser = new User({
                    username: username,
                    name: name,
                    email: email
                });

                return appUser
                    .save()
                    .then(() => {
                        logger.info(`User ${username} created.`);
                    });
            } else {
                logger.info(`User ${username} found.`);
                return user;
            }
        })
        .catch(err => { throw err; });
};