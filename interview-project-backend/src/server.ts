import express from "express"
import cors from "cors"
import { appPort, frontendUrl } from "./env"

const app = express()

app.use(cors({
    origin: (origin, callback) => {
        if (origin && origin !== frontendUrl) {
            return callback(new Error("Origin not allowed by cors"))
        }
        return callback(null, true)
    }
}))



app.listen(appPort, () => {
    console.log(`App is running on ${appPort}`)
})
export default app

