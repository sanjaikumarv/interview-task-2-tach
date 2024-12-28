import { Request, Response } from "express"
import app from "./server"
import { getMainElements, getMainSideBarItems, getVersionLabels } from "./utils"

app.get('/versions', (req, res) => {
    const versions = getVersionLabels()
    res.json(versions)
})

app.get("/main-sidebar/:version", (req: Request, res: Response) => {
    const { version } = req.params
    if (!version) {
        res.json([])
    }
    const labels = getMainSideBarItems(version)
    res.send(labels)
})

app.get("/:versionId/sidebar/:mainSideBarId", (req: Request, res: Response) => {

    const { versionId, mainSideBarId } = req.params

    if (!versionId || !mainSideBarId) {
        res.json([])
    }
    const data = getMainElements(versionId, mainSideBarId)


    res.json(data)
})
