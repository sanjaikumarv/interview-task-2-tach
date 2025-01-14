import { Request, Response } from "express"
import app from "./server"
import { getMainElements, getMainSideBarItems, getVersionLabels } from "./utils"

app.get('/helpDocs/versions', (req, res) => {
    const versions = getVersionLabels()
    res.json({ versions: versions })
})

app.get("/helpDocs/main-sidebar/:version", (req: Request, res: Response) => {
    const { version } = req.params
    if (!version) {
        res.json([])
    }
    const labels = getMainSideBarItems(version)
    res.json(labels)
})

app.get("/helpDocs/:versionId/sidebar/:mainSideBarId", (req: Request, res: Response) => {

    const { versionId, mainSideBarId } = req.params

    if (!versionId || !mainSideBarId) {
        res.json([])
    }
    const data = getMainElements(versionId, mainSideBarId)

    res.json(data)
})
