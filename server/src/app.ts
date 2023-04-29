import fs from "fs";
import * as http from "http";
import * as https from "https";

/* configuration */
type Environment = "dev" | "prod";
const isProd = fs.readFileSync("configuration").toString().indexOf("prod") >= 0;

const express = require("express");
const app = express();
const httpPort = 63105;
const httpsPort = 62105;

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

/*if (isProd) {
    /!* --- for https *!/
    const privateKey = fs.readFileSync('/etc/letsencrypt/live/www.vocabulum.de/privkey.pem', 'utf8');
    const certificate = fs.readFileSync('/etc/letsencrypt/live/www.vocabulum.de/cert.pem', 'utf8');
    const ca = fs.readFileSync('/etc/letsencrypt/live/www.vocabulum.de/chain.pem', 'utf8');
    const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca
    };
    console.log(credentials);

    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(httpsPort, () => {
        console.log(`Vocabulum Website server (https) listening on port ${httpsPort}`);
    });
}*/

const httpServer = http.createServer(app);
httpServer.listen(httpPort, () => {
    console.log(`Vocabulum Website server listening on port ${httpPort}`);
});

require("./newsletter/newsletter_email.service").connectToDatabase();