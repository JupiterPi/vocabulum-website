import {PropertyFilter} from "@google-cloud/datastore";

interface NewsletterEmail {
    email: string;
}

export async function getEmail(id: number): Promise<NewsletterEmail> {
    const [entity] = await datastore.get(datastore.key(["Email", id]));
    return entity;
}

export async function findEmailsByEmail(email: string): Promise<NewsletterEmail[]> {
    const query = datastore.createQuery("Email")
        .filter(new PropertyFilter("email", "=", email));
    const [entities] = await datastore.runQuery(query);
    return entities as NewsletterEmail[];
}

export async function createEmail(email: NewsletterEmail): Promise<string> {
    const key = datastore.key("Email");
    await datastore.insert({key, data: email});
    return key.id;
}

export async function deleteEmail(id: number): Promise<void> {
    await datastore.delete(datastore.key(["Email", id]));
}