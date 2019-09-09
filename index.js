const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', (req, res, next) => console.log('OK'));

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send(`Internal Server Error: ${err}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
