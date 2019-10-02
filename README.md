# Polling

The main goal of this app is to experiment with some technologies related to Javascript. 

## Features

- Create poll
- Edit poll
- Delete poll
- Vote
- Register user
- Authenticate user

## Technologies

- Angular
- Angular Material
- Angular Flex Layout
- Node.js
- Express
- Mongo DB
- Mongoose
- Morgan/Winston
- Fakerator

## Executing

### .env

First of all, there are some environment variables that should be set in the `middleware/.env` file:

```
PORT=3000
APP_USER_USERNAME=polling
APP_USER_NAME=Polling
APP_USER_EMAIL=polling@domain.com
MONGODB_HOST=cluster0-shard-00-00-5qsjr.mongodb.net:27017,cluster0-shard-00-01-5qsjr.mongodb.net:27017,cluster0-shard-00-02-5qsjr.mongodb.net:27017
MONGODB_USERNAME=polling
MONGODB_PASSWORD=<secret>
MONGODB_DATABASE=polling
```
_Change the values at will accordingly to you Mongo DB configuration._ 

### Database

You should have a Mongo DB server available. It can be a local/remote installation, a docker contianer or even an instance in Cloud Atlas.

With that in place and with the `middleware/.env` file configured accordingly, run the `create-test-db.js` script to create some test data:

```
cd middleware/
npm run create-test-db
```

### Middleware

You can run the middleware component in a development fashion, where the files will be watched for changes:

```
npm run dev
```

Or for a production environment:

```
npm start
```

### Frontend

To start the frontend component, simply serve it with the Angular CLI:

```
ng serve
```