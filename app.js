const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 3000

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('health check is running...')
  res.send('ok')
})

app.get('/version', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('version check is running...')
  res.send('11')
})

/* app.get('/health', (req, res) => {
  throw 'error...'
  // eslint-disable-next-line no-unreachable
  res.send('ok')
}) */