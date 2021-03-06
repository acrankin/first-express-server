require('dotenv').config();
const { createServer } = require('http');
const app = require('./lib/app');

const PORT = 6719;

const server = createServer(app);

server.listen(PORT, () => { /* eslint-disable-next-line no-console */
    console.log(`Listening on port ${PORT}`);
});
