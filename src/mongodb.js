// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
const { MongoClient } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
// DATABASE NAME
const databaseName = "instaya";

const client = new MongoClient(connectionURL);

async function run() {
  try {
    const database = client.db("instaya");
    const haiku = database.collection("haiku");
    //create a document to insert
    const instayaUsers = {
      name: "Fulanito de Tal",
      email: "fulanito@guayando.org",
    };
    const result = await haiku.insertOne(instayaUsers);

    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("Unable to connect to database!");
//     }
//     // console.log("Connected correctly!");

//     // CONNECTING TO THE DATABASE
//     const connectDB = client.db(databaseName);

//     // DATABASE COLLECTION
//     const collection = connectDB.collection("instayaUsers");

//     // INSERTING SINGLE DOCUMENT
//     collection.insertOne(
//       {
//         name: "Fulanito de Tal",
//         email: "fulanito@guayando.org",
//       },
//       (error, result) => {
//         if (error) {
//           return console.log("Unable to insert user");
//         }

//         console.log(result.ops);
//       }
//     );
//   }
// );
