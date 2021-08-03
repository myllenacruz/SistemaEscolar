const express = require('express')
const routes = require('./routes/index')

const app = express()
app.use(express.urlencoded({ extended: true }))

routes(app)

app.listen(3000, () => {
  console.log('Ok!')
})

module.exports = app
