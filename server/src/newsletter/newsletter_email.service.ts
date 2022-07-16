import * as mongoDB from "mongodb";
import fs from "fs";

export const collections: { newsletterEmailsCollection?: mongoDB.Collection } = {};

export async function connectToDatabase () {
    const connectionUrl = fs.readFileSync("mongodb_connect_url.txt").toString();
    console.log(connectionUrl);
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(connectionUrl);
    await client.connect();
    const db: mongoDB.Db = client.db("vocabulum_website");
    const newsletterEmailsCollection: mongoDB.Collection = db.collection("newsletter_emails");
    collections.newsletterEmailsCollection = newsletterEmailsCollection;
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${newsletterEmailsCollection.collectionName}`);
}