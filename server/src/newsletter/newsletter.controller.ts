import * as repo from "./newsletter_email.repo";
import {Router} from "express";
import logger from "../logger";

const api = Router();

// get email address info
api.get("/:id", async (req, res) => {
    const id = parseInt(req.params["id"]);
    res.send(await repo.getEmail(id));
});

// subscribe new email
api.post("", async (req, res) => {
    const email = req.body;
    email["email"] = (email["email"] as string).toLowerCase();
    const existingEmails = await repo.findEmailsByEmail(email["email"]);
    if (existingEmails.length > 0) {
        res.status(409).send();
    } else {
        const id = await repo.createEmail(email);
        logger.log(`Subscribed email: ${email["email"]} with id ${id}`);
        res.send(id);
    }
});

// unsubscribe
api.delete("/:id", async (req, res) => {
    const id = parseInt(req.params["id"]);
    await repo.deleteEmail(id);
    logger.log(`Unsubscribed email with id: ${id}`);
    res.send();
});

export = api;