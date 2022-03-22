const express = require("express");
const app = express();
const port = 63105;

app.use(express.json());

app.use(express.static("dist/vocabulum-website"));
app.use("/api/newsletter", require("./newsletter/newsletter.controller"));

app.listen(port, () => {
    console.log(`Vocabulum Website server listening on port ${port}`);
});

require("./newsletter/newsletter_email.service").connectToDatabase();