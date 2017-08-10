import Express from 'express'

const App = new Express()

App.get(`/`, (req, res) => {
  res.json({ app: 'CollabCodeBR Project Boilerplate :-)' })
})

export default App
