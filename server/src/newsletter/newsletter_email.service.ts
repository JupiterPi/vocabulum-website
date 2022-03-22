import * as mongoDB from "mongodb";

export const collections: { newsletterEmailsCollection?: mongoDB.Collection } = {};

export async function connectToDatabase () {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient("mongodb://localhost");
    await client.connect();
    const db: mongoDB.Db = client.db("vocabulum_website");
    const newsletterEmailsCollection: mongoDB.Collection = db.collection("newsletter_emails");
    collections.newsletterEmailsCollection = newsletterEmailsCollection;
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${newsletterEmailsCollection.collectionName}`);
}