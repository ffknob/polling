require('dotenv').config();

const Fakerator = require('fakerator');
const logger = require('./services/logger');

const mongodbService = require('./services/mongodb');

const User = require('./models/user');
const Poll = require('./models/poll');
const Vote = require('./models/vote');

const MODELS = [User, Poll, Vote]
const APP_USER_USERNAME = process.env.APP_USER_USERNAME || 'polling';
const APP_USER_NAME = process.env.APP_USER_NAME || 'Polling';
const APP_USER_EMAIL = process.env.APP_USER_EMAIL || 'polling@ffknob.com.br';

const USERS_TOTAL = 50;
const POLLS = [
    {
        title: "Animal",
        question: "What is your favorite animal?",
        options: [
            { option: "Dog" },
            { option: "Cat" },
            { option: "Elephant" }
        ]
    },
    {
        title: "Color",
        question: "What is your favorite color?",
        options: [
            { option: "Blue" },
            { option: "Red" },
            { option: "Green" },
            { option: "Yellow" },
            { option: "Black" },
            { option: "White" }
        ]
    },
    {
        title: "Travel",
        question: "Where would to travel to?",
        options: [
            { option: "Brazil" },
            { option: "Germany" },
            { option: "Italy" },
            { option: "France" }
        ]
    }
];

function threatError(err) {
    if (err) {
        logger.error(err);
        throw err;
    }
}

function main() {
    mongodbService
    .connect()
    .then(async connection => {
        let appUser = null;

        await cleanCollections(MODELS);

        await createAppUser()    
        .then(user => {
            logger.info(`Created app user ${user.username}`);
            appUser = user;
        })
        .catch(err => threatError(err));

        await createUsers(appUser, USERS_TOTAL)
        .then((result) => logger.info(`Created ${result.successes} users`))
        .catch(err => threatError(err));

        await createPolls(appUser, POLLS)
        .then((result) => logger.info(`Created ${result.successes} polls`))
        .catch(err => threatError(err));

        connection.disconnect();
    })
    .catch(err => {
        threatError(err);
    });
}

function cleanCollections(models) {
    return Promise.all(
        models.map(async (m) => {
            await m.deleteMany({}, err => { 
                threatError(err);
                logger.info(`Deleted documents in collection ${m.collection.name}`);
            });
        })
    );
}

function createUser(appUser, user) {
    const newUser = new User({
        username: user.username,
        name: user.name,
        email: user.email,
        createdBy: appUser ? appUser._id : null
    });

    return newUser.save();
}

function createPoll(appUser, poll) {
    const newPoll = new Poll({
        title: poll.title,
        question: poll.question,
        options: poll.options,
        createdBy: appUser._id
    });

    return newPoll.save();
}

function createAppUser() {
    const user = {
        username: APP_USER_USERNAME,
        name: APP_USER_NAME,
        email: APP_USER_EMAIL
    };

    return createUser(null, user);
}

function generateFakeUser() {
    const fakerator = Fakerator();

    const firstName = fakerator.names.firstName();
    const lastName = fakerator.names.lastName();
    const name = `${firstName} ${lastName}`;
    const username = fakerator.internet.userName(firstName, lastName);
    const email = fakerator.internet.email(firstName, lastName);
    
    return {
        username: username,
        name: name,
        email: email
    };
}

function createUsers(appUser, total) {
    const promises = [];
    const result = { successes: 0, failures: 0 };

    for (let i = 0; i < total; i++) {
        const fakeUser = generateFakeUser();

        promises.push(
            createUser(appUser, fakeUser)
            .then(user => {
                logger.info(`Created user ${user.username}`);
                result.successes++;
            })
            .catch(err => {
                threatError(err);
                result.failures++;
            })
        );
    }

    return Promise.all(promises)
    .then(() => result);
}

function createPolls(appUser, polls) {
    const result = { successes: 0, failures: 0 };

    return Promise.all(
        polls.map(async (poll) => {
            await createPoll(appUser, poll)
            .then(() => {
                logger.info(`Create poll ${poll.title}`);
                result.successes++;
            })
            .catch(err => {
                threatError(err);
                result.failures++;
            });
        })
    )
    .then(() => result);
}

main();