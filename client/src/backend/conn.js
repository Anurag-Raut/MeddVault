const { MongoClient } = require("mongodb");
const Db = 'mongodb+srv://admin:<password>@cluster0.ainnpst.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(Db, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {

      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};