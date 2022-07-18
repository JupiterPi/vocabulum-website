const express = require("express");
const app = express();
const port = 63105;

app.use(express.json());

// --------
const _app_folder = "dist/vocabulum-website";
// ---- SERVE STATIC FILES ---- //
//app.get('*.*', express.static(_app_folder));
// ->
app.use(express.static("dist/vocabulum-website"));
// ---- SERVE APPLICATION PATHS ---- //
["/imprint", "/unsubscribe"].forEach(route => {
    app.get(route, function (req, res) {
        res.status(200).sendFile("/index.html", {root: _app_folder});
    });
});
// --------  (source: https://itnext.io/express-server-for-an-angular-application-part-1-getting-started-2cd27de691bd)

//app.use(express.static("dist/vocabulum-website"));
app.use("/api/newsletter", require("./newsletter/newsletter.controller"));

app.use("/api/analyze", require("./analyze/analyze.controller"));

app.listen(port, () => {
    console.log(`Vocabulum Website server listening on port ${port}`);
});

require("./newsletter/newsletter_email.service").connectToDatabase();