import express from "express"
import cors from "cors"
import { appPort, frontendUrl } from "./env"

const app = express()

app.use(cors())

app.use(express.json())


app.listen(appPort, () => {
    console.log(`App is running on ${appPort}`)
})
export default app

