import { MongoClient, Database } from "./mod.ts";

let db: Database;

const client = new MongoClient();
client.connectWithUri('mongodb+srv://siddeshwar:59nmj7aKrssa19Xk@cluster0-tr6jh.mongodb.net/<dbname>?retryWrites=true&w=majority');
db = client.database("deno-blog");

// Limit
console.log(await db.collection('feed').limit(1).find());

// Skip
console.log(await db.collection('feed').skip(1).find());
