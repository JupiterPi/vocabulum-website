import {Datastore} from "@google-cloud/datastore";

declare global {
    var datastore: Datastore;
}

export {};