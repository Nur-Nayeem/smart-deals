const express = require("express");
const cors = require("cors");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

const uri = process.env.MONGODB_URI;

//meddilewaire
app.use(cors());
app.use(express.json());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("wow you have made a server");
});

async function run() {
  try {
    await client.connect();

    const productDB = client.db("smart_db");
    const productsCollection = productDB.collection("products");
    const bidsCollection = productDB.collection("bids");

    app.get("/products", async (req, res) => {
      console.log("calling all products");

      const cursor = productsCollection.find().sort({ created_at: -1 });
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productsCollection.findOne(query);
      res.send(result);
    });

    app.get("/latest-products", async (req, res) => {
      // // test :
      //   const projectField = { _id: 0, title: 1, price_min: 1, price_max: 1 };
      //   const cursor = productsCollection
      //     .find()
      //     .sort({ price_min: 1 })
      //     .skip(2)
      //     .limit(5)
      //     .project(projectField);

      //now:
      console.log("calling latest");

      const cursor = productsCollection
        .find()
        .sort({ created_at: -1 })
        .limit(6);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.post("/products", async (req, res) => {
      const newProduct = req.body;
      const result = await productsCollection.insertOne(newProduct);
      res.send(result);
    });

    app.patch("/products/:id", async (req, res) => {
      const updatedOnbject = req.body;
      const id = req.params.id;
      const findQuery = { _id: new ObjectId(id) };
      const updateQuery = {
        $set: updatedOnbject,
      };
      const result = await productsCollection.updateOne(findQuery, updateQuery);
      res.send(result);
    });

    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productsCollection.deleteOne(query);
      res.send(result);
    });

    // bids api
    app.get("/products/:id/bids", async (req, res) => {
      try {
        const id = req.params.id;

        // const query = { productId: new ObjectId(id) };
        const query = { productId: id };

        const bids = await bidsCollection.find(query).toArray();

        res.send(bids);
      } catch (error) {
        console.error("Error fetching bids:", error);
        res.status(500).send({ message: error.message });
      }
    });

    app.post("/bids", async (req, res) => {
      const bidObject = req.body;
      bidObject.status = "pending";
      const result = await bidsCollection.insertOne(bidObject);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    //await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
