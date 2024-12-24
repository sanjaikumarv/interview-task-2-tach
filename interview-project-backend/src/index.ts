import { Request, Response } from "express"
import { mainContent, sideBarItems } from "./datas"
import app from "./server"

app.get("/main-sidebar/:version", (req: Request, res: Response) => {

    const { version } = req.params

    if (!version) {
        res.json([])
    }

    const filterData = sideBarItems.find((item) => item.verisonName === version)?.sideBarElements
    res.json(filterData)
})

app.get("/sidebar/:name", (req: Request, res: Response) => {

    const { name } = req.params

    if (!name) {
        res.json([])
    }

    const filteredData = mainContent.find((item) => item.sideBarName === name)?.content

    res.json(filteredData)
})
