const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static(__dirname + '/public'))

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
  }))
  app.set('view engine', 'handlebars')

app.get('/', (req, res) => res.render('PointProfessorView/PointProfessor'))
app.get('/about', (req, res) => res.render('about'))
app.get('/info', (req, res) => res.render('info'))

// custom 404 page
app.use((req, res) => {
  res.status(404)
  res.render('404')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
})


app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))