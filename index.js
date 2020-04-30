require('dotenv').config();
const server = require('./api/server.js');

const motd = process.env.MOTD;
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
  console.log(motd);
});
