const mongoose = require("mongoose"),
  TreeCrawler = require("./crawler"),
  Tree = require("./api/models/treeListModel"),
  collectionName = "trees";

mongoose.Promise = global.Promise;
mongoose.set("debug", true);

(async () => {
  try {
    await mongoose.connect("mongodb://localhost/tree-stack");
    await Tree.collection.drop();

    // look for trees
    const crawled = await TreeCrawler();
    const toInsert = crawled.map(name => ({
      name
    }));

    // insert found trees in database
    await mongoose.connection.db
      .collection(collectionName)
      .insertMany(toInsert, (err, res) => {
        if (err) throw err;
        console.log(`Number of tree inserted: ${res.insertedCount}`);
      });

  } catch (err) {
    console.error(e);
  } finally {
    mongoose.disconnect();
  }
})();
