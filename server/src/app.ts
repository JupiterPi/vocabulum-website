import {Datastore} from "@google-cloud/datastore";
import express from "express";
import cors from "cors";
import api from "./newsletter/newsletter.controller";

global.datastore = new Datastore();

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:4200"
}));

app.use("/api/newsletter", api);

app.listen(8080, () => {
    console.log("Vocabulum Website running on port 8080!");
});