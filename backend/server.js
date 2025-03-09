const express = require('express')
const app = express()
const port = 3000
const sequelize = require('./clients/database');

app.use(express.json());

sequelize.sync()
  .then(() => {
    console.log('Database connected and synced');
  })
  .catch((err) => {
    console.error('Error syncing the databse: ', err);
  });
  
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})