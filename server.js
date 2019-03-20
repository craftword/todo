const express = require('express')
const next = require('next')
const apiRouter = require('./route')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//const rows = [] 
    
app.prepare()
.then(() => {
  const server = express()
  server.use('/api/listItems', apiRouter);  
  
  server.get('*', (req, res) => {
    return handle(req, res)
  })
      
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
