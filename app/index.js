const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/test', (req, res) => res.status(200).send({ message: 'Ok :}' }))

app.listen(3000, () => {
  console.log('Ok!')
})

module.exports = app
