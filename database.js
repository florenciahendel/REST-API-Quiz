const mongoose = require("mongoose");
const config = require("./config");
(async () => {
  try {
    const db = await mongoose.connect(config.mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Datababase is connected to: ${db.connection.name}`);
  } catch (error) {
    console.error(error);
  }
})();
