const {Datastore} = require("@google-cloud/datastore");
global.datastore = new Datastore();

const app = require("express")();
app.use(require("express").json());

app.use(require("cors")({
    origin: "http://localhost:4200"
}));

app.use("/api/newsletter", require("./newsletter/newsletter.controller"));

app.listen(8080, () => {
    console.log("Vocabulum Website running on port 8080!");
});