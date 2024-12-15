import { Router } from "express";
import { prismaClient } from "../config/db";

const router = Router();

router.get("/available", async (req, res) => {
    const availableActions = await prismaClient.availabelActions.findMany({});
    res.json({
        availableActions
    })
});

export const actionRouter = router;