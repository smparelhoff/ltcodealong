const express = require('express')
const morgan = require('morgan')
const path = require('path')
const models = require('./models')
const router = require('./routes')
const PORT = 8080

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "./public")))

app.use('/', router)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send("Uh! Something broke!")
})

const init = async () => {
  await models.db.sync({force:true})
  app.listen(PORT, () => {
    console.log("I am listening!")
  })
}

init()


