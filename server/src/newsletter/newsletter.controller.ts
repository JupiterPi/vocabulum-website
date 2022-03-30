import NewsletterEmail from "./newsletter_email";
import {ObjectId} from "mongodb";

const express = require("express");
const api = express.Router();

const newsletterEmailService = require("./newsletter_email.service");

// get email details
api.get("/:id", async (req, res) => {
    try {
        const emailId = req.params.id;
        const doc = {
            _id: new ObjectId(emailId)
        }
        const newsletterEmail = await newsletterEmailService.collections.newsletterEmailsCollection.findOne(doc);
        res.send(newsletterEmail);
    } catch (ex) {
        res.status(500).send(ex.message);
    }
});

// subscribe
api.post("/", async (req, res) => {
    const email = req.body.email.toLowerCase();

    const doc = {
        email: email
    } as NewsletterEmail;

    if ((await newsletterEmailService.collections.newsletterEmailsCollection.find(doc).toArray()).length >= 1 ) {
        res.contentType("application/json");
        res.send({
            message: "You seem to be already subscribed to the newsletter."
        });
        return;
    }

    let result = await newsletterEmailService.collections.newsletterEmailsCollection.insertOne(doc);
    const newsletterEmail = (await newsletterEmailService.collections.newsletterEmailsCollection.findOne( { _id: new ObjectId(result.insertedId)} )) as NewsletterEmail;

    console.log(`Signed up ${newsletterEmail.email} for newsletter`);

    res.contentType("application/json");
    res.send({
        newsletterEmail: newsletterEmail,
        message: ""
    });
});

// unsubscribe
api.delete("/:id", async (req, res) => {
    try {
        const emailId = req.params.id;
        const newsletterEmail = (await newsletterEmailService.collections.newsletterEmailsCollection.findOne({ _id: new ObjectId(emailId) })) as NewsletterEmail;
        if (newsletterEmail) {
            await newsletterEmailService.collections.newsletterEmailsCollection.deleteOne({ _id: new ObjectId(emailId) });
            console.log(`Unsubscribed ${newsletterEmail.email} from newsletter`);
            res.status(202).send({
                message: `Successfully unsubscribed ${newsletterEmail.email} from the newsletter.`
            });
        } else {
            res.status(200).send({
                message: `That email is not subscribed to the newsletter currently.`
            });
        }
    } catch (ex) {
        res.status(500).send(ex.message);
    }
});

module.exports = api;