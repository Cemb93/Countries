require('dotenv').config();
const PORT = process.env.PORT || 3001;
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log('Listening at PORT:', 3001);
  });
});
