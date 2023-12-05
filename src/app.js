import express from "express"
import LoginController from "./app/controller/LoginController.js"

const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.get("/user", LoginController.index)
app.get("/user/:id", LoginController.show)
app.post("/user", LoginController.store)
app.put("/user/:id", LoginController.update)
app.delete("/user/:id", LoginController.delete)

export default app 