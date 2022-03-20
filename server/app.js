const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

const emailsFile = "emails.txt";

app.use(express.static("app"));

app.use(express.json());

app.post("/api/signupNewsletter", (req, res) => {
    const email = req.body.email;
    fs.appendFile(emailsFile, email + "\n", err => {
        if (err) {
            console.error(err);
        }
    });
    console.log(`Signed up ${email} for newsletter`);
    res.send();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});