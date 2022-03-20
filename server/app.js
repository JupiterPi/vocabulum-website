const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

const emailsFile = "emails.txt";

app.use(express.static("app"));

app.use(express.json());

app.post("/api/signupNewsletter", (req, res) => {
    const email = req.body.email;

    fs.readFile(emailsFile, "utf8", (err, file) => {
        if (err) {
            console.error(err);
            return;
        }
        file += "\n" + email;
        fs.writeFile(emailsFile, file, err => {
            if (err) {
                console.error(err);
            }
        });
    });

    console.log(`Signed up ${email} for newsletter`);
    res.send();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});