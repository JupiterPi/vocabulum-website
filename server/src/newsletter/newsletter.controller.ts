import * as repo from "./newsletter_email.repo";
import {Router} from "express";

const api = Router();

// get email address info
api.get("/:id", async (req, res) => {
    const id = parseInt(req.params["id"]);
    res.send(await repo.getEmail(id));
});

// subscribe new email
api.post("", async (req, res) => {
    const email = req.body;
    const id = await repo.createEmail(email);
    res.send(id);
});

// unsubscribe
api.delete("/:id", async (req, res) => {
    const id = parseInt(req.params["id"]);
    await repo.deleteEmail(id);
    res.send();
});

export = api;