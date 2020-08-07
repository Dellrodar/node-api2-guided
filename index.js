const express = require("express")
const usersRouter = require("./users/users-router")
const homeRouter = require("./home/home-router")

const server = express()
const port = 4000

server.use(express.json())
server.use(homeRouter)
server.use(usersRouter)

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
