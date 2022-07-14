const express = require('express')
const routes = require('./routes/index')

const app = express()
app.use(express.urlencoded({ extended: true }))

routes(app)
const port = 3000
app.listen(port, () => {
  console.info(`Server is running on port ${port}`)
})

module.exports = app
