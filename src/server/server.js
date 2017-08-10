const Express = require('express')
const App = new Express()

App.get(`/`, (req, res) => {
  res.json({ app: 'CollabCodeBR Project Boilerplate :-)' })
})

App.listen(4200, (port) => {
  console.log('App listen on port: 4200')
})
