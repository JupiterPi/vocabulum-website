import NewsletterEmail from "./newsletter_email";
import {ObjectId} from "mongodb";

const express = require("express");
const api = express.Router();

const newsletterEmailService = require("./newsletter_email.service");

api.post("/signup", async (req, res) => {
    const email = req.body.email;

    const doc = {
        email: email
    } as NewsletterEmail;

    if ((await newsletterEmailService.collections.newsletterEmailsCollection.find(doc).toArray()).length >= 1 ) {
        res.contentType("application/json");
        res.send({
            message: "You're seem to be already subscribed to the newsletter."
        });
        return;
    }

    newsletterEmailService.collections.newsletterEmailsCollection.insertOne(doc);

    console.log(`Signed up ${email} for newsletter`);

    res.contentType("application/json");
    res.send({
        message: ""
    });
});

api.post("/unsubscribe", async (req, res) => {
    const id = req.body.id;
    const newsletterEmail = (await newsletterEmailService.collections.newsletterEmailsCollection.findOne({ _id: new ObjectId(id) })) as NewsletterEmail;
    if (newsletterEmail) {
        await newsletterEmailService.collections.newsletterEmailsCollection.deleteOne({ _id: new ObjectId(id) });
        res.status(202).send({
            message: `Successfully unsubscribed ${newsletterEmail.email} from the newsletter.`
        });
    } else {
        res.status(200).send({
            message: `That email is not subscribed to the newsletter currently.`
        });
    }
});

/*api.get("/", async (req, res) => {
    const newsletterEmails = (await newsletterEmailService.collections.newsletterEmailsCollection.find({}).toArray()) as NewsletterEmail[];
    res.send(newsletterEmails);
});*/

module.exports = api;