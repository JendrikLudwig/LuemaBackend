const express = require('express')
const schedule = require('node-schedule');

var publicRoutes = require('./routes/public-routes');

const app = express()
const port = 3030


const job = schedule.scheduleJob('10 * * * *', function(){
  console.log('This event accures every 10 minutes!');
});



app.get('/', (req, res) => {
  res.send('Luema-Backend. For further questions reach out to jendrik.ludwig@outlook.de')
})

app.listen(port, () => {
  console.log(`Luema-Backend now running on port ${port}`)
})

app.use('/public', publicRoutes);