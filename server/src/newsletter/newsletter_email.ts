import {ObjectId} from "mongodb";

export default class NewsletterEmail {
    constructor(public email: string, public id?: ObjectId) {}
}