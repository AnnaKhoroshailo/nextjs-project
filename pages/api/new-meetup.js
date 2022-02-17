//POST /api/new-meetup

import { MongoClient, ServerApiVersion } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const uri =
      "mongodb+srv://anna-enot:AsrPOg4ukK0zieo5@cluster0.n2yqw.mongodb.net/meetups?retryWrites=true&w=majority";

    const client = await MongoClient.connect(uri);

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
