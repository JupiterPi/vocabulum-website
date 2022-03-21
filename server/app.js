const express = require("express");
const fs = require("fs");

const app = express();
const port = 63105;

const emailsFile = "emails.txt";

app.use(express.static("dist/vocabulum-website"));

app.use(express.json());

app.post("/api/signupNewsletter", (req, res) => {
    const email = req.body.email;
    fs.appendFile(emailsFile, email + "\n", err => {
        if (err) {
            console.error(err);
        }
    });
    console.log(`Signed up ${email} for newsletter`);

    res.contentType("application/json");
    res.send({
        message: ""
    });
});

app.listen(port, () => {
    console.log(`Vocabulum Website server listening on port ${port}`);
});