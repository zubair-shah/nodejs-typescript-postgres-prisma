import express from "express";
import router from './router'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from "./modules/auth";
import { createUser, signin } from "./handlers/user";

const app = express();
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// app.get('/', (req, res, next) => {
//   setTimeout(() => {
//     next(new Error("asynchronous"))
//   }, 1)
// })

app.use('/api', protect, router)
app.post('/signup', createUser)
app.post('/signin', signin)
app.get("/", (req, res, next) => {
  res.json({ message: "hello" })
});

app.use((err, req, res, next) => {
  if (err.type === "input") {

    res.status(401).json({ message: `Error: Unauthorized` })
  }
})
export default app;